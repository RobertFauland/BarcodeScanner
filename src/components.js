AFRAME.registerComponent('hello-world', {
  schema: {
    message: {type: 'string', default: 'hello world!'},
    message2: {type: 'string', default: ''}
  },
  init: function () {
    console.log(this.data.message, this.data.message2);
  }
});

AFRAME.registerComponent('box', {
  schema: {
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 1},
    color: {type: 'color', default: '#AAA'}
  },
  init: function () {
    var data = this.data;
    var el = this.el;
    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    el.setObject3D('mesh', this.mesh);
  }
});