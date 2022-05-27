import { render, screen, fireEvent } from '@testing-library/react';
import File from './File';

const data = {
    name: 'App.jsx'
}

describe('File filling', () => {

    test('name in document', () => {
        render(<File data={data} />);
        const fileName = screen.getByText(data.name);
        expect(fileName).toBeInTheDocument()
    })

    test('file icon in document', () => {
        render(<File data={data} />);
        const fileIcon = screen.getByTestId("BsFileEarmark")
        expect(fileIcon).toBeInTheDocument()
    })

    test('button delete in document', () => {
       render(<File data={data} />);
       const deleteButton = screen.getByTestId("onDelete")
        expect(deleteButton).toBeInTheDocument();
    })
})

describe('File button', () => {
     test('button click', () => {
        const handleClick = jest.fn()
        render(<File data={data} onDelete={handleClick}  />);
        const deleteButton = screen.getByTestId("onDelete")
        expect(handleClick).not.toBeCalled()
        fireEvent.click(deleteButton)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})



