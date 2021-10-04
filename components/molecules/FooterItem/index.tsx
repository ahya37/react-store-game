import Brand from './Brand';
import Menu from './Menu';

export default function FooterItem() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Brand />
        <Menu />
      </div>
    </div>
  );
}
