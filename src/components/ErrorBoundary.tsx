import { Component, type ReactNode } from 'react'

type Props = { children: ReactNode; fallback?: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false }

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error) {
        // eslint-disable-next-line no-console
        console.error('[ErrorBoundary]', error)
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? null
        }
        return this.props.children
    }
}