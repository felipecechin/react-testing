import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', async () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  });

  const button = screen.getByRole('button');

  await userEvent.click(nameInput);
  await userEvent.keyboard('Jane');
  await userEvent.click(emailInput);
  await userEvent.keyboard('jane@gmail.com');

  await userEvent.click(button);

  const name = screen.getByRole('cell', {
    name: 'Jane'
  });
  const email = screen.getByRole('cell', {
    name: 'jane@gmail.com'
  });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();

});