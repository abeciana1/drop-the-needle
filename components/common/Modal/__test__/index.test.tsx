// import { render, screen } from '@testing-library/react'
// import { ModalComp } from '@/components/common'

// const mockOnClick = jest.fn()
// const mockRender = jest.fn()
// const mockSetRender = jest.fn()

// const renderedComponent = () => {
//     render(
//         <ModalComp
//             shouldCloseOnEsc={false}
//             shouldCloseOnOverlayClick={false}
//             onClick={mockOnClick}
//             render={mockRender}
//             setRender={mockSetRender}
//             text='test'
//             bgColor='ceruleanBlue'
//         >
//             <h1>Mock child element</h1>
//         </ModalComp>
//     )
// }

// describe('ModalComponent - alternative closing disabled', () => {
//     test.only('> renders successfully', () => {
//         renderedComponent()
//         screen.debug()
//         screen.logTestingPlaygroundURL()
//     })
// })