import { useNavigate } from 'react-router-dom'
import { systemStore, useSystemState } from '../store/system'
import { WarpOverlay } from './WarpOverlay'

/**
 * Envuelve al WarpOverlay para que solo exista en el DOM mientras
 * el warp está activo. Así el overlay nunca bloquea el canvas
 * del sistema solar cuando no hay animación corriendo.
 */
export function WarpPortal() {
    const navigate = useNavigate()
    const { warping, warpTarget } = useSystemState()

    // Sin warp activo → no renderiza nada → el canvas vuelve a ser clicable.
    if (!warping || !warpTarget) return null

    return (
        <WarpOverlay
            duration={3400}
            onArrive={() => {
                // Navegamos cuando el flash blanco está al 100%.
                navigate(warpTarget)
            }}
            onComplete={() => {
                // Al terminar la animación limpiamos el estado y el overlay
                // se desmonta → pointer-events del canvas vuelven a su sitio.
                systemStore.setWarping(null)
                systemStore.setFocusedPlanet(null)
            }}
        />
    )
}