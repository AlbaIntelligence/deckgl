import parseLayerProps from "./layer";

const Viz = ({ deckGL, widgetElement }) => ({
  deckGL,
  widgetElement,
  layers: [ ],
  sources: [ ],

  _getContainer() {
    return this.deckGL.props.container;
  },

  // TODO: If 'source' is an id it should not be stored in the 'data' property of the source
  // At the moment this is done because of the R part.
  // In R there should be a function like 'use_source' to specify that the source is an id,
  // because a string could also be an url.
  _getData(source) {
    let data = source.data;
    if (typeof data === "string" && this.sources.map(source => source.id).includes(data)) {
      data = this.getSource(data).data;
    }

    return data;
  },

  addSource({ id, data, df }) {
    if (df) data = HTMLWidgets.dataframeToD3(data);
    this.sources.push({ id, data });
  },

  getSource(id) {
    return this.sources.filter(source => source.id === id)[0];
  },

  setLayers(layers) {
    layers.forEach(layer => {
      const source = layer.source;
      if (typeof source === "object") {
        if (source.df) layer.source.data = HTMLWidgets.dataframeToD3(source.data);
      }
    });
    this.layers = layers;
  },

  render() {
    const deckLayers = this.layers.map(layer => {
      layer.properties.data = this._getData(layer.source);
      const props = parseLayerProps(layer.properties, this.widgetElement);
      return new deck[layer.className](props);
    });
    this.deckGL.setProps({ layers: deckLayers });
  }
});

export default Viz;