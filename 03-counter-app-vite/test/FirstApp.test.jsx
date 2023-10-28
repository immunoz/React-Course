import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp";

describe('Testing <FirstApp />', () => {
    
    // test('Should match with the snapshot', () => {
      
    //     const title = 'Título'
    //     const { container } = render(<FirstApp title={ title }/>);

    //     expect( container ).toMatchSnapshot();

    // });
  
    test('Should show the title in a h1 ', () => {
        
        const title = 'Título'
        const { container, getByText, getByTestId } = render(<FirstApp title={ title }/>);
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe( title );
        expect( getByTestId('test-title').innerHTML ).toContain( title );

    });

    test('Should show the subtitle sent by props', () => {
        const title = 'Título'
        const subtitle = 'Soy un subtitulo'
        const { getAllByText } = render(
            <FirstApp 
                title={ title }
                subtitle={ subtitle }
            />
        );
        expect( getAllByText(subtitle).length ).toBe( 2 );
    })
    
    
})
