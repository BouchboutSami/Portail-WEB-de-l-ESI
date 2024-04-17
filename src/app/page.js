import Button from "./components/Button";
import ButtonIcon from "./components/ButtonIcon";
import Stats from "./components/Stats";
import Breadcrumb from "./components/Breadcrumb";

export default function Home() {
  const table = [
    {
      title: 'Professors',
      stats: '4',
    },
    {
      title: 'Lecturers',
      stats: '20',  
    },
    {
      title: 'Doctoral candidates',
      stats: '60+',
    }
  ];

  const Buttontitle = 'Hello world!';
  const items = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Category', url: '/category' },
    { label: 'Current Page' },
  ];
  return (
    <div className="font-poppins text-blue">
      <Stats table={table} />
      <Button title={Buttontitle} />
      <ButtonIcon title={Buttontitle}/>
      <div className="container mx-auto py-4">
      <Breadcrumb/>
      </div>
    </div>
  );
}
