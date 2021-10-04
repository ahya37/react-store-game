import LinkMenu from './LinkMenu';

export default function Contact() {
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
      <ul className="list-unstyled">
        <LinkMenu title="hi@store.gg" />
        <LinkMenu title="team@store.gg" />
        <LinkMenu title="Pasific 12, Jakarta Selatan" />
        <LinkMenu title="021 - 1122 - 9090" />
      </ul>
    </>
  );
}
