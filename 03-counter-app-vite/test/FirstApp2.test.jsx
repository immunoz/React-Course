import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp";

describe('Testing <FirstApp />', () => {

    const title = 'Hello World';
    const subtitle = 'Hello World subtitle';
    
    test('should match snapshot', () => {

        const { container } = render( <FirstApp title={title} /> );
        expect( container ).toMatchSnapshot();
      
    });

    test('should show the message "Hello World"', () => {
      
        render( <FirstApp title={title} /> );
        expect( screen.getByText(title) ).toBeTruthy();

    });

    test('should show the title in a h1', () => {
      
        render( <FirstApp title={title} /> );
        expect( screen.getByRole('heading', { level: 1}).innerHTML ).toContain(title);
    });

    test('should show subtitle sent by props', () => {
      
        render(
            <FirstApp
                title={ title }
                subtitle={ subtitle}
            />
        );

        expect( screen.getAllByText(subtitle).length ).toBe(2);
        
    });
    
});
