import { renderWithVuetify } from './utils';
import FolderIcon from '@/components/FolderIcon';

describe('FolderIcon.vue', () => {
  it('renders open folder icon when open', () => {
    const { container } = renderWithVuetify(FolderIcon, {
      props: { isOpen: true },
    });
    const icon = container.querySelector('.mdi-folder-open');
    expect(icon).not.toBe(null);
  });

  it('renders closed folder icon when not open', () => {
    const { container } = renderWithVuetify(FolderIcon, {
      props: { isOpen: false },
    });
    const icon = container.querySelector('.mdi-folder');
    expect(icon).not.toBe(null);
  });
});
