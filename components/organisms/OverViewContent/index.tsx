import Image from 'next/image';
import TableRow from '../TableRow';
import Category from './Category';

export default function OverViewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category nominal={17000500} icon="ic-desktop">
                Game
                <br />
                Desktop
              </Category>
              <Category nominal={18000500} icon="ic-mobile">
                Game
                <br />
                Mobile
              </Category>
              <Category nominal={14000500} icon="ic-other">
                Other
                <br />
                Category
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  image="overview-1"
                  title="Mobile Legends: The New Battle 2021"
                  category="Desktop"
                  item={200}
                  price={29000}
                  status="Pending"
                />
                <TableRow
                  image="overview-2"
                  title="Clash of Clans"
                  category="Desktop"
                  item={200}
                  price={29000}
                  status="Success"
                />
                <TableRow
                  image="overview-3"
                  title=" Call of Duty:Modern"
                  category="Desktop"
                  item={200}
                  price={29000}
                  status="Failed"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
