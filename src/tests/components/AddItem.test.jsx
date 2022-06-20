import { render, screen, fireEvent } from "@testing-library/react";
import { AddItem } from "../../components";

describe('Test on <AddItem />', () => {
  test('Should change value to input text', () => {
    const searchTerm = 'Dragon Ball';

    render( <AddItem onNewItem={ () => undefined } /> );

    const input = screen.getByRole('textbox');
    
    // input if an event like onClick
    fireEvent.input(input, { target: { value: searchTerm }});

    expect(input.value).toBe(searchTerm);
  });

});