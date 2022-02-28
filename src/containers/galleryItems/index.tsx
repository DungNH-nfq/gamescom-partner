import { Component } from 'react';

import { PropsGalleryItem } from '../../typings/gallery';
import { GalleryItem } from '../galleryItem';

type GalleryItemsState = {
  items: PropsGalleryItem[];
};

export class GalleryItems extends Component<
  GalleryItemsState,
  GalleryItemsState
> {
  constructor(props: GalleryItemsState) {
    super(props);
    this.state = { items: props.items };
  }

  toggleSubscribe(item: PropsGalleryItem) {
    const { items } = this.state;
    const itemInState = items.find((stateItem) => item.id === stateItem.id);

    if (!itemInState) {
      return;
    }

    itemInState.isSubscribed = !itemInState.isSubscribed;
    this.setState({
      items,
    });
  }

  render() {
    return this.state.items.map((item) => (
      <GalleryItem
        key={item.id}
        id={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        hasSubscribe={item.hasSubscribe}
        isSubscribed={item.isSubscribed}
        onToggleSubscribe={() => this.toggleSubscribe(item)}
      />
    ));
  }
}
