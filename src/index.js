/**
 * Created by Anxin Yang on 3/28/2018.
 */
import CubY from './cuby/CubY';
window.root = new CubY.createElement('div', 'cuby_root', document.getElementById('app'));
assetLoaded('main');