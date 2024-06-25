import BankIDimg from '../../assets/QRCodeBankID.png';
import BrandStyleImg from '../../assets/brand_style.png';
import ProgressImg from '../../assets/Progress.png';

const caselist = [
    {
      id: 1,
      title: 'A login with swedish BankID',
      body: 'A case for a company on the swedish electricity market',
      image: BankIDimg,
      linkTo: '/BankID',
      backgroundColor: "#E6E6E6",
    },
    {
      id: 2,
      title: 'Brand Style guide',
      body: "An educational assignment - To create a brand style guide for a made up company",
      image: BrandStyleImg,
      linkTo: '/Brand',
       backgroundColor: "#E6E6E6",
    },
    {
      id: 3,
      title: 'Trash2Treasure',
      body: "An educational group challenge - To create a webapp on the theme, Green Tech",
      image: ProgressImg,
      linkTo: '/Trash2Treasure',
      backgroundColor: "#E6E6E6",
    },
  ]
  
  export default caselist;