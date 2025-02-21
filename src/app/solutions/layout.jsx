import HeaderFooterView from '@/components/Views/HeaderFooterView';

const SolutionsLayout = ({ children }) => {
  return (
    <HeaderFooterView>
      {children}
    </HeaderFooterView>
  )
};

export default SolutionsLayout;
