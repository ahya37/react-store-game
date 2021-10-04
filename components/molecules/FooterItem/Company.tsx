import LinkMenu from './LinkMenu';

export default function Company() {
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
      <ul className="list-unstyled">
        <LinkMenu title="About Us" />
        <LinkMenu title="Press Release" />
        <LinkMenu title="Terms of Use" />
        <LinkMenu title="Privacy & Policy" />
      </ul>
    </>
  );
}
