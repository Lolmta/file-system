import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import File from './File';

const data = {
    name: 'App.jsx'
}

afterEach(cleanup)

describe('File filling', () => {
    test('name in document', () => {
        render(<File data={data} />);
        expect(screen.getByText(data.name)).toBeInTheDocument()
    })

    test('file icon in document', () => {
        const { getByTestId } = render(<File data={data} />);
        expect(getByTestId("BsFileEarmark")).toBeInTheDocument();
    })

    test('button delete in document', () => {
        const { getByTestId } = render(<File data={data} />);
        expect(getByTestId("onDelete")).toBeInTheDocument();
    })
})

describe('File button', () => {
    test('name in document', () => {
        render(<File data={data} />);
        expect(screen.getByText(data.name)).toBeInTheDocument()
    })

    //  test('name in document', async () => {
    //     const handleClick = jest.fn()

    //      const { getByTestId } =  render(<File data={data} onDelete={handleClick} />);
        
    //     await fireEvent.click(screen.getByTestId("onDelete"))
    //     // expect(handleClick).toHaveBeenCalledTimes(1)

    // })

})



