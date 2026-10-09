import { Scene } from '../components/Scene.tsx'
import { HUD } from '../components/HUD.tsx'
import { PlanetReadout } from '../components/PlanetReadout.tsx'
import { ErrorBoundary } from '../components/ErrorBoundary.tsx'

export function SolarSystem() {
    return (
        <>
            <Scene />
            <ErrorBoundary>
                <HUD />
            </ErrorBoundary>
            <ErrorBoundary>
                <PlanetReadout />
            </ErrorBoundary>
            <div className="vignette" aria-hidden="true" />
        </>
    )
}