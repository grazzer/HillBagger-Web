import { CircularProgress } from "@mui/material";
import { Layout_Basic } from "../components/pageLayouts/layout_basic";

export default function LoadingPage() {
  return (
    <Layout_Basic>
      <div className="flex flex-1 justify-center">
        <div className="flex justify-center items-center flex-col">
          <CircularProgress sx={{ color: "#52d0b8" }} />
          <p>Surveying Hills</p>
        </div>
      </div>
    </Layout_Basic>
  );
}
