import { Layout_Basic } from "../components/pageLayouts/layout_basic";

export default function notFoundPage() {
  return (
    <Layout_Basic>
      <div className="flex flex-1 justify-center">
        <div className="flex justify-center items-center flex-col">
          <p>Oops.. cannot find Page </p>
        </div>
      </div>
    </Layout_Basic>
  );
}
