

import { CustomManifest } from './config';
import { Imenu } from './Imenu';

export function createMenu(options: CustomManifest): Imenu[] {

    let mfeMenu: Imenu[] = []

    Object.keys(options).forEach(key => {
        if (options[key].menu) {
            mfeMenu.push({
                mfeTitle: options[key].displayName,
                menu: options[key].menu
            })
        }
    })

    return mfeMenu;
}
