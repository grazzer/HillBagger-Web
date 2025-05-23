import { Layout_Basic } from "../components/pageLayouts/layout_basic";

export default function ErrorPage(message: Error) {
  return (
    <Layout_Basic>
      <div className="flex flex-1 justify-center">
        <div className="flex justify-center items-center flex-col">
          <p>Oops.. {message.message} </p>
        </div>
      </div>
    </Layout_Basic>
  );
}
