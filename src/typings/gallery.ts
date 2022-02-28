export interface PropsGalleryItem {
  id: number;
  thumbnail: string | null | undefined;
  title: string;
  hasSubscribe: boolean;
  isSubscribed: boolean;
  onToggleSubscribe: (isSubscribed: boolean) => void;
}
