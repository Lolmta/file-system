import Tree from './Tree.jsx'
import { render , screen } from '@testing-library/react';

describe('Tree test', () => {
    test('data 0 ', () => {
        const data = {}
        render(<Tree data={data} />);
       expect(screen.getByText(/everything has been removed/i)).toBeInTheDocument()
    })

    test('data file', () => {
        const data = {
            type:'file',
            path: '/src/App.js'
        }
        render(<Tree  key={data.path} data={data} />);
        expect(screen.getByTestId('BsFileEarmark'))
    })

    test('data folder', () => {
        const data = {
            type:'folder',
            path: '/src/App.js',
            content:[
                { name: 'App.js'}
            ]
        }
        render(<Tree key={data.path} data={data} />);
        expect(screen.getByTestId('StyledFile'))
    })
})

