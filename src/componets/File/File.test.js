import { render, screen, cleanup } from '@testing-library/react';
import File from './File';
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

afterEach(cleanup);

const data = {
    name: 'App.jsx'
}

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

describe('File style', () => {

    test('style', () => {
        const { getByTestId } = render(<File data={data} />);
        expect(getByTestId("StyledFile")).toHaveStyle("display: flex");
    })
})


