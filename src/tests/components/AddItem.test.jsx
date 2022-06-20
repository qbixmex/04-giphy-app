import { render, screen, fireEvent } from "@testing-library/react";
import { AddItem } from "../../components";

describe('Test on <AddItem />', () => {
  test('Should change value to input text', () => {
    const searchTerm = 'Dragon Ball';

    render( <AddItem onNewItem={ () => undefined } /> );

    // Html Elements
    const input = screen.getByRole('textbox');
    
    // input is an event like onClick
    fireEvent.input(input, { target: { value: searchTerm }});

    expect(input.value).toBe(searchTerm);
  });

  test('Should call onSubmit if input has a value', () => {
    const searchTerm = 'Dragon Ball';
    const onNewItem = jest.fn();

    render( <AddItem onNewItem={ onNewItem } /> );

    // Html Elements
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // Events
    fireEvent.input(input, { target: { value: searchTerm }});
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewItem).toHaveBeenCalled();
    expect(onNewItem).toHaveBeenCalledTimes(1);
    expect(onNewItem).toHaveBeenCalledWith(searchTerm);
  });

  test('Should call onSubmit if form button has been called', () => {
    const searchTerm = 'Dragon Ball';
    const onNewItem = jest.fn();

    render( <AddItem onNewItem={ onNewItem } /> );

    // Html Elements
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Add' });

    // Events
    fireEvent.input(input, { target: { value: searchTerm }});
    fireEvent.click(button);

    expect(onNewItem).toHaveBeenCalledWith(searchTerm);
  });

  test('Should not call onSubmit if input does not have value', () => {
    const onNewItem = jest.fn();

    render( <AddItem onNewItem={ onNewItem } /> );

    // Html Elements
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // Events
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewItem).not.toHaveBeenCalled();
    expect(onNewItem).toHaveBeenCalledTimes(0);
  });

  test('Should not call onSubmit if input has less than 3 characters', () => {
    const searchTerm = 'Dr';
    const onNewItem = jest.fn();

    render( <AddItem onNewItem={ onNewItem } /> );

    // Html Elements
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // Events
    fireEvent.input(input, { target: { value: searchTerm }});
    fireEvent.submit(form);

    expect(input.value).toBe(searchTerm);
    expect(onNewItem).not.toHaveBeenCalled();
  });
});