import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('버튼이 제대로 잘 작동하고 있습니까?', () => {
  render(<App />);

  // 'Change to Blue!'라는 텍스트를 가진 버튼을 탐색.
  const button = screen.getByRole('button', { name: 'Change to blue!' });

  // 버튼이 khaki 색상으로 렌더링되었는지 확인.
  expect(button).toHaveStyle({ backgroundColor: 'khaki' });


  // 버튼 클릭이 제대로 작동하는지 확인.
  fireEvent.click(button);
  expect(button.textContent).toBe('Change to khaki!');
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
});