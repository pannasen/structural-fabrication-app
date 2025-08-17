import { render, screen } from '@testing-library/react'
import React from 'react'

function App() {
	return <h1>Hello Structural Fabrication</h1>
}

it('renders greeting', () => {
	render(<App />)
	expect(screen.getByText('Hello Structural Fabrication')).toBeInTheDocument()
})