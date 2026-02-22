import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Note from './Note';

test('renders content', () => {
  const note = {
    content: 'Component testing is made with react-testing-libary',
    important: true,
  };

  const mockHandler = vi.fn();

  render(<Note note={note} toggleImportance={mockHandler()} />);

  const user = userEvent.setup();
  const button = screen.getByText('make not important');
  user.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
