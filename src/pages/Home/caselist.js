import bankIDimg from '../../assets/QRCodeBankID.png';
import brandStyleImg from '../../assets/brandStyle.png';
import progressImg from '../../assets/Progress2.png';

const caselist = [
    {
      id: 1,
      title: 'A login with swedish BankID',
      body: 'A case for a company on the swedish electricity market',
      image: bankIDimg,
      linkTo: '/BankID',
      backgroundColor: "#E0E0E0",
    },
    {
      id: 2,
      title: 'Brand Style guide',
      body: "An educational assignment - To create a brand style guide for a made up company",
      image: brandStyleImg,
      linkTo: '/Brand',
       backgroundColor: "#E0E0E0",
    },
    {
      id: 3,
      title: 'Trash 2 Treasure',
      body: "An educational group challenge - To create a webapp on the theme, Green Tech",
      image: progressImg,
      linkTo: '/Trash2Treasure',
      backgroundColor: "#ffffff",
    },
  ]
  
  export default caselist;