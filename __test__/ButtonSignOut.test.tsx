import ButtonSignOut from '@/components/ui/ButtonSignOut';
import { render, screen } from '@testing-library/react';

describe('Test Sign Out Buton', () => {
  it('it should show the button text', () => {
    render(<ButtonSignOut showLabel={true} />);
    const button = screen.getByTestId('signout-button');
    expect(button.textContent).toEqual('Sign Out');
  });
  it('it should NOT show the button text', () => {
    render(<ButtonSignOut showLabel={false} />);
    const button = screen.getByTestId('signout-button');
    expect(button.textContent).toEqual('');
  });
  it('it should NOT show the button text if component has no showLabel props', () => {
    render(<ButtonSignOut />);
    const button = screen.getByTestId('signout-button');
    expect(button.textContent).toEqual('');
  });
});
