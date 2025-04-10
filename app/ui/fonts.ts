// アプリケーションに追加するカスタムGoogleフォント
import { Inter, Lusitana} from "next/font/google";

// 読み込みたいサブセットを指定(フォントの中から特定文字を取り出す)
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400","700"] });
