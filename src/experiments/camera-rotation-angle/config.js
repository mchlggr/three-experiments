export default {
  title: 'Camera Rotation Angle',
  description: 'Camera rotation experiment with Euler angles',
  tags: 'Camera, Euler',
  public: true,
  scripts: [
    '../../libs/three/r84/three.min.js',
    // 'http://127.0.0.1:8080/build/three.js',
    '../../libs/three/r84/controls/OrbitControls.js',
    '../../libs/stats/r17/stats.min.js',
    '../../libs/threex/THREEx.WindowResize.js',
    '../../libs/dat.gui/0.6.2/dat.gui.min.js',
  ],
  styles: [
    '../../libs/dat.gui/0.6.2/dat.gui.css',
  ],
};
