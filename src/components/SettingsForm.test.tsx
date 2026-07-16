import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SettingsForm from './SettingsForm';

describe('SettingsForm', () => {
  it('renders all form fields', () => {
    render(<SettingsForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save settings/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty submissions', async () => {
    render(<SettingsForm />);
    
    fireEvent.click(screen.getByRole('button', { name: /save settings/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
    });
  });

  it('submits successfully with valid data', async () => {
    render(<SettingsForm />);
    const user = userEvent.setup();
    
    await user.type(screen.getByLabelText(/full name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
    
    const submitBtn = screen.getByRole('button', { name: /save settings/i });
    fireEvent.click(submitBtn);
    
    await waitFor(() => {
      expect(submitBtn).toHaveTextContent(/saving/i);
      expect(submitBtn).toBeDisabled();
    });
  });
});
