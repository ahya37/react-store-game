import LinkMenu from './LinkMenu';

export default function Support() {
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
      <ul className="list-unstyled">
        <LinkMenu title="Refund Policy" />
        <LinkMenu title="Unlock Rewards" />
        <LinkMenu title=" Live Chatting" />
      </ul>
    </>
  );
}
