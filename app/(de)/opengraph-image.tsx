export {
  ogAlt as alt,
  imageSize as size,
  imageContentType as contentType,
} from "@/lib/og-image";
import { renderOgImage } from "@/lib/og-image";

export default function OpengraphImage() {
  return renderOgImage("de");
}
