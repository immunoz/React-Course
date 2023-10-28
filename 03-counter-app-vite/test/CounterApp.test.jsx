import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp";

describe('Testing the component <CounterApp />', () => {

    const defaultValueForTesting = 100;

    // IDs
    const counterNumberID = 'counter';

    test('should match snapshot', () => {

        const { container } = render( <CounterApp value={ defaultValueForTesting }/> );
        expect( container ).toMatchSnapshot();
      
    });

    test('should show the initial value 100', () => {

        render( <CounterApp value={ defaultValueForTesting }/> );
        expect( screen.getByTestId( counterNumberID ).innerHTML ).toBe('100');
      
    });

    test('should increment with the +1 button', () => {

        render( <CounterApp value={ defaultValueForTesting }/> );
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByTestId( counterNumberID ).innerHTML ).toBe('101');
      
    });

    test('should increment with the -1 button', () => {

        render( <CounterApp value={ defaultValueForTesting }/> );
        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByTestId( counterNumberID ).innerHTML ).toBe('99');
      
    });

    test('should reset the counter to the default value', () => {
      
        render( <CounterApp value={ defaultValueForTesting }/> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('reset') );

        expect( screen.getByTestId( counterNumberID ).innerHTML ).toBe(defaultValueForTesting.toString());

    })
    
    
});
