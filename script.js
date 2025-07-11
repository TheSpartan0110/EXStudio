(function(){
    var script = {
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "initialPosition": {
  "yaw": -54.41,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": -3.06
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ba\u00f1o Habitaci\u00f3n P Piso 2",
 "id": "panorama_BCFFC460_B294_263B_41D2_812D9082F47A",
 "overlays": [
  "this.overlay_A6E4DD05_B294_6605_41E2_C92C885527A9",
  "this.overlay_A63AE262_B294_223F_41E4_134E4A27BD52"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -108.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 93.27,
   "panorama": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
   "distance": 1
  },
  {
   "yaw": 78.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -67.45,
   "panorama": "this.panorama_BCF3EF0B_B294_220E_41BC_895572243E28",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -3.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEB387EA_BE82_F690_41B2_20828D8E0FCC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -104.73,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEA437D8_BE82_F6B0_41C4_18A98C10F4EB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 127.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF4968E0_BE82_FA90_41E1_8DF0237007DE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 32.59,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -8.8
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFFC460_B294_263B_41D2_812D9082F47A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 161.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF01ABD1_BE82_FEB0_41C9_BC077B732836",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -169.16,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AFDA4BB1_BE82_FEF0_41CC_1233345CFA59",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 45.2,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 27.32,
    "targetPitch": -4.99,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 53.89
   },
   {
    "targetYaw": -85.01,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.8,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 97.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -6.09,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -37.12,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 93.81,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEAED7CF_BE82_F691_41CA_C92F38363A9C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -22.39,
  "hfov": 129,
  "class": "PanoramaCameraPosition",
  "pitch": -5.46
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF3EF0B_B294_220E_41BC_895572243E28_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -36.74,
  "class": "PanoramaCameraPosition",
  "pitch": -6.17
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pasillo 1 Piso 1",
 "id": "panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
 "overlays": [
  "this.overlay_A603DF5C_B38C_620B_41E3_C7BBF4996339",
  "this.overlay_A678B64E_B38C_2207_41AF_1CA339D506C2",
  "this.overlay_A7C8F46D_B38C_E605_41DD_990F75553A1C",
  "this.overlay_A65300A6_B38C_5E07_41DD_924F60B4ABD4",
  "this.overlay_A6B399CE_B374_6E07_41BE_FD833F45CAD7",
  "this.overlay_A48E8D8C_B374_E60B_41E5_6A7AF3B00CE8",
  "this.overlay_823DF04B_B73B_E233_41B3_8431C48D263F",
  "this.overlay_A35A5AAB_B85A_A8AB_41E3_41E0D295A3AF",
  "this.overlay_A46E567C_B85B_9BAD_41A9_07E6F9FEF714"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -59.78,
   "class": "AdjacentPanorama",
   "backwardYaw": 42.27,
   "panorama": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345",
   "distance": 1
  },
  {
   "yaw": -60.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.19,
   "panorama": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -150.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -126.7,
   "panorama": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
   "distance": 1
  },
  {
   "yaw": 176.29,
   "class": "AdjacentPanorama",
   "backwardYaw": 170.47,
   "panorama": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 122.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 153.61,
   "panorama": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "distance": 1
  },
  {
   "yaw": 20.09,
   "class": "AdjacentPanorama",
   "backwardYaw": -158.98,
   "panorama": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -137.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0.26
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCE37E62_B294_223E_41D5_683710308D0B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 15.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC794708_BE82_F79F_41E3_C169DAE05235",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Piscina 3",
 "id": "panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B",
 "overlays": [
  "this.overlay_A32203F1_B69C_10BD_41E6_675DD40D1DD6",
  "this.overlay_ACAC7056_B69C_2FE7_41DB_2A052CC263A4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 108.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -52.95,
   "panorama": "this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63",
   "distance": 1
  },
  {
   "yaw": -60.76,
   "class": "AdjacentPanorama",
   "backwardYaw": -131.83,
   "panorama": "this.panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jard\u00edn",
 "id": "panorama_BCEDA408_B294_660B_41D2_CCAFD434536C",
 "overlays": [
  "this.overlay_ACE3D251_B574_13FD_41C9_3ED1B5AFE731"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -120.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 71.62,
   "panorama": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 45.2,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -4.99
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -85.01,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.8,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 97.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -6.09,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -37.12,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 156.53,
  "class": "PanoramaCameraPosition",
  "pitch": 3.87
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -120.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE2B5837_BE82_F9F0_41DD_E00CBB2C4CFC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 153.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC60A6FF_BE82_F670_41DD_1871046B8F95",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -88.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF8CCB83_BE82_FE90_41CF_8CD291C1255E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -177.35,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 6.51,
    "targetPitch": 12.53,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 12.07
   },
   {
    "targetYaw": 81.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.52,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.72,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -18.17,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ba\u00f1o Habitaci\u00f3n S Piso 2",
 "id": "panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430",
 "overlays": [
  "this.overlay_A11965BD_B2FC_660A_41B5_37919A2C967C",
  "this.overlay_A6F696B6_B2FC_E206_41E4_B4B1380586BA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 48.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -118.33,
   "panorama": "this.panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED",
   "distance": 1
  },
  {
   "yaw": -132.19,
   "class": "AdjacentPanorama",
   "backwardYaw": -3.11,
   "panorama": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -43.46,
  "class": "PanoramaCameraPosition",
  "pitch": 1.12
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -50.12,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF0CF8C0_BE82_FA8F_41BC_50B206F89646",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 30.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE7AF868_BE82_F990_41DF_9B8F2570B5A2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_acceleration",
 "mouseControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pasillo exterior 2",
 "id": "panorama_BCE8535C_B294_220B_419C_97E4DBF51571",
 "overlays": [
  "this.overlay_A3BE4913_B58C_117D_41D2_272BE5657E02",
  "this.overlay_AC6CF670_B58C_13BB_41E5_7D3E6F2E0DCC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -174.39,
   "class": "AdjacentPanorama",
   "backwardYaw": 18.97,
   "panorama": "this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917",
   "distance": 1
  },
  {
   "yaw": 4.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 52.97,
   "panorama": "this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Entrada",
 "id": "panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
 "overlays": [
  "this.overlay_A3459C80_B594_175B_41B0_B5016DEACF26",
  "this.overlay_A3EC57E4_B594_10DB_41E4_457C674F15AD",
  "this.overlay_A84D05ED_B594_10A4_41A9_DBA42200C405",
  "this.overlay_A3985956_B594_11E7_41D6_B17047DD216F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -5.39,
   "class": "AdjacentPanorama",
   "backwardYaw": -113.28,
   "panorama": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC",
   "distance": 1
  },
  {
   "yaw": -104.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -90.44,
   "panorama": "this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917",
   "distance": 1
  },
  {
   "yaw": 153.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 122.62,
   "panorama": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "distance": 1
  },
  {
   "yaw": -5.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -150.88,
   "panorama": "this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -56.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AED88AE9_BE82_FE90_41D3_375B45DBFD3B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 29.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC84F934_BE82_FBF0_41E1_75A2F2DE7E43",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Terraza 3",
 "id": "panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4",
 "overlays": [
  "this.overlay_A1102A1B_B294_620E_41C6_0AFD68920E5F",
  "this.overlay_A6E69AE0_B294_223B_41E1_8EA28F4153E5",
  "this.overlay_A118C749_B294_620D_41D9_311280482196"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 101.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 20.87,
   "panorama": "this.panorama_BCE199F0_B294_2E1B_41D1_E919D0034708",
   "distance": 1
  },
  {
   "yaw": 21.66,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.25,
   "panorama": "this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D",
   "distance": 1
  },
  {
   "yaw": 22.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -133.51,
   "panorama": "this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 115.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF1B78C8_BE82_FA9F_41E6_443B020E58DE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 46.84,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -1.09
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -63.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0.14
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 65.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE07EB39_BE82_FFF0_41D7_9AA6C2534E6E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 66.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF688906_BE82_FB90_41D7_DDA40B4ED033",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 97.3,
  "class": "PanoramaCameraPosition",
  "pitch": 3.18
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 66.91,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEF5C81D_BE82_F9B0_41B6_0AFAB02B361E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -128.19,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 89.5,
    "targetPitch": -14.32,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 178.83
   },
   {
    "targetYaw": -115.76,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -47.55,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -92.53,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC5B26EE_BE82_F693_41E3_5D6DD129280C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 81.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC4186E4_BE82_F690_41DB_DB83FF568F51",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -24.46,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEEE580D_BE82_F990_4194_BCF072C562F9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -131.74,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEB6CAD1_BE82_FEB0_41C7_AB3359021BA0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 119.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF881870_BE82_FA70_41DC_244B3E7F082A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Sala 2",
 "id": "panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E",
 "overlays": [
  "this.overlay_A3C66036_B594_EFA7_41A2_11A03EB23B88",
  "this.overlay_A3A4236E_B594_31A7_41E3_F3D7A5338CCC",
  "this.overlay_AC691B70_B594_11BB_41E0_91D054FDD64E",
  "this.overlay_F3F410E6_B755_63F5_41B3_43A112BBD5A7",
  "this.overlay_FFF6FB46_B74D_A634_41D1_3C89F5F80468"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 76.56,
   "class": "AdjacentPanorama",
   "backwardYaw": -140.11,
   "panorama": "this.panorama_BCE37E62_B294_223E_41D5_683710308D0B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -78.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AFBF5BA3_BE82_FE91_41E2_E01C7BA6F1E7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 9.54,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 10.04,
    "targetPitch": 7.92,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 19.16
   },
   {
    "targetYaw": -145.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -9.94,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.35,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -29.43,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -15.98,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ba\u00f1o Habitaci\u00f3n Piso 1",
 "id": "panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9",
 "overlays": [
  "this.overlay_A677D88F_B3BC_2E05_41D7_EFC39973BFD7",
  "this.overlay_A66464B6_B3BC_E606_41CA_DE4D2DC1AF23"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 100.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -69.85,
   "panorama": "this.panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A",
   "distance": 1
  },
  {
   "yaw": -86.19,
   "class": "AdjacentPanorama",
   "backwardYaw": 25.09,
   "panorama": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Habitaci\u00f3n S 2 Piso 2",
 "id": "panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E",
 "overlays": [
  "this.overlay_A69FC48F_B2F4_2605_41B7_882B095D5499",
  "this.overlay_A6C350C4_B2F4_7E7B_41D9_ED8FC1575B96"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -98.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 52.42,
   "panorama": "this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 46.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AFE36BC2_BE82_FE90_41E4_F1E41D58409C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 39.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE42B84F_BE82_F990_41B4_E02EC879BD88",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -12.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEC10AE1_BE82_FE90_419D_C1DE816D1401",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Terraza 2",
 "id": "panorama_BCF835AF_B294_2606_41BE_1C6360089D8D",
 "overlays": [
  "this.overlay_A6A05E9E_B294_2206_4198_456CF856B339",
  "this.overlay_A4C571CE_B294_7E07_41D1_47E11FFE9D44",
  "this.overlay_A10D4886_B294_6E07_41A8_FDEB9B15FA4E",
  "this.overlay_A4A048F5_B6CB_63D7_41E2_CADAF7431EB9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -60.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -135.13,
   "panorama": "this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCE199F0_B294_2E1B_41D1_E919D0034708",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -0.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -143.79,
   "panorama": "this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943",
   "distance": 1
  },
  {
   "yaw": 91.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 21.66,
   "panorama": "this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Habitacion P 2 Piso 2",
 "id": "panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A",
 "overlays": [
  "this.overlay_A6A7899D_B28C_2E05_41E4_2CD66509294C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -83.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 154.73,
   "panorama": "this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ba\u00f1o Social Piso 1",
 "id": "panorama_BCF600D5_B297_FE05_41D8_251627B380F4",
 "overlays": [
  "this.overlay_A6769466_B38C_6607_41B2_7DAC595DA138",
  "this.overlay_848EA393_B73F_6653_41C1_9494860D7408"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 70.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 146.95,
   "panorama": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
   "distance": 1
  },
  {
   "yaw": 75.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 129.88,
   "panorama": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 36.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE6CF860_BE82_F990_41B4_DA15C3842128",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 139.73,
  "class": "PanoramaCameraPosition",
  "pitch": -2.87
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF619F2_B294_2E1F_41E2_371766686094_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 54.94,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -2.69
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -118.72,
  "class": "PanoramaCameraPosition",
  "pitch": 1.94
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pasillo Habitaci\u00f3n P Piso 2",
 "id": "panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
 "overlays": [
  "this.overlay_A111A483_B293_E6FD_41E0_493A02B80FB7",
  "this.overlay_A6D36010_B294_FE1A_41C2_787255E488AB",
  "this.overlay_A17D4916_B295_EE07_41E1_73CF3F266C33"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 10.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -107.82,
   "panorama": "this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40",
   "distance": 1
  },
  {
   "yaw": -164.86,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.36,
   "panorama": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
   "distance": 1
  },
  {
   "yaw": 93.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -108.93,
   "panorama": "this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 46.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF966B93_BE82_FEB1_41E4_DA17FF6F4EA8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 22.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 3.55,
    "targetPitch": 6.35,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 6.12
   },
   {
    "targetYaw": -136.07,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -12.41,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pasillo Habitaci\u00f3n Piso 1",
 "id": "panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
 "overlays": [
  "this.overlay_A6539B97_B3BC_2206_41A5_D82F19533741",
  "this.overlay_A638CFC8_B3BC_E20B_41E4_7C1C4EF0DD77",
  "this.overlay_A789B760_B3BC_223B_41E4_5B607861AFEF",
  "this.overlay_9ED4A39C_B6D4_E655_41DB_8A29F7AA08A5",
  "this.overlay_9CDEF6CD_B6CB_AE34_41DA_8C081869FC02",
  "this.overlay_9E8069F2_B6CC_A5ED_41E4_CB4B70F88FB0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 132.33,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.16,
   "panorama": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
   "distance": 1
  },
  {
   "yaw": 25.09,
   "class": "AdjacentPanorama",
   "backwardYaw": -86.19,
   "panorama": "this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9",
   "distance": 1
  },
  {
   "yaw": 129.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 75.27,
   "panorama": "this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4",
   "distance": 1
  },
  {
   "yaw": -55.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -147.58,
   "panorama": "this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012",
   "distance": 1
  },
  {
   "yaw": 170.47,
   "class": "AdjacentPanorama",
   "backwardYaw": 176.29,
   "panorama": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "distance": 1
  },
  {
   "yaw": 155.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 59.79,
   "panorama": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -103.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEDC7AF2_BE82_FE73_41A6_F3D29158DEF8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -26.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE47CB63_BE82_FF90_41DE_0C524250E15E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -165.92,
  "class": "PanoramaCameraPosition",
  "pitch": -0.62
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF67E95_B294_6205_41E6_4008DC577345_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -109.57,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC745712_BE82_F7B3_41DB_620FB825C82B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 156.56,
  "hfov": 129,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE1D782E_BE82_F990_41E3_2C31290FC4ED",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 119.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEA43AB8_BE82_FEFF_4194_E8B027F1FF63",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Sala 2 Piso 2",
 "id": "panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7",
 "overlays": [
  "this.overlay_A6F613F2_B2F4_221F_41C4_11EC6A5D6BC3",
  "this.overlay_A66E538A_B2F4_E20F_41BD_C6E949D03F29"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -133.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -26.04,
   "panorama": "this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28",
   "distance": 1
  },
  {
   "yaw": -34.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.02,
   "panorama": "this.panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -139.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B171C78A_BE82_F690_41B9_488DDE2662C7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 179.69,
  "class": "PanoramaCameraPosition",
  "pitch": -0.26
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 106.74,
  "class": "PanoramaCameraPosition",
  "pitch": -3.26
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Cocina 2",
 "id": "panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4",
 "overlays": [
  "this.overlay_A623A739_B37C_620D_41BA_EC1F16031DAE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -64.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 108.85,
   "panorama": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -108.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEA08AB1_BE82_FEF1_41D2_B5FDF5F56E13",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_camera"
  },
  {
   "media": "this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_camera"
  },
  {
   "media": "this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_camera"
  },
  {
   "media": "this.panorama_BCE199F0_B294_2E1B_41D1_E919D0034708",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_camera"
  },
  {
   "media": "this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_camera"
  },
  {
   "media": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_camera"
  },
  {
   "media": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_camera"
  },
  {
   "media": "this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A_camera"
  },
  {
   "media": "this.panorama_BCF3EF0B_B294_220E_41BC_895572243E28",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3EF0B_B294_220E_41BC_895572243E28_camera"
  },
  {
   "media": "this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_camera"
  },
  {
   "media": "this.panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_camera"
  },
  {
   "media": "this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_camera"
  },
  {
   "media": "this.panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_camera"
  },
  {
   "media": "this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_camera"
  },
  {
   "media": "this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_camera"
  },
  {
   "media": "this.panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_camera"
  },
  {
   "media": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_camera"
  },
  {
   "media": "this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_camera"
  },
  {
   "media": "this.panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_camera"
  },
  {
   "media": "this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_camera"
  },
  {
   "media": "this.panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_camera"
  },
  {
   "media": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_camera"
  },
  {
   "media": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_camera"
  },
  {
   "media": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B_camera"
  },
  {
   "media": "this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_camera"
  },
  {
   "media": "this.panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_camera"
  },
  {
   "media": "this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_camera"
  },
  {
   "media": "this.panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_camera"
  },
  {
   "media": "this.panorama_BCFF96CD_B297_E205_41BC_EC93C658E758",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_camera"
  },
  {
   "media": "this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4_camera"
  },
  {
   "media": "this.panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_camera"
  },
  {
   "media": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_camera"
  },
  {
   "media": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094_camera"
  },
  {
   "media": "this.panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_camera"
  },
  {
   "media": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345_camera"
  },
  {
   "media": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_camera"
  },
  {
   "media": "this.panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_camera"
  },
  {
   "media": "this.panorama_BCE37E62_B294_223E_41D5_683710308D0B",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE37E62_B294_223E_41D5_683710308D0B_camera"
  },
  {
   "media": "this.panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_camera"
  },
  {
   "media": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_camera"
  },
  {
   "media": "this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_camera"
  },
  {
   "media": "this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_camera"
  },
  {
   "media": "this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571_camera"
  },
  {
   "media": "this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_camera"
  },
  {
   "media": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_camera"
  },
  {
   "media": "this.panorama_BCEDA408_B294_660B_41D2_CCAFD434536C",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_camera"
  },
  {
   "media": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 46, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_camera"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -138.69,
  "class": "PanoramaCameraPosition",
  "pitch": -2.79
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -167.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF92287F_BE82_FA70_41E0_5FF9C0A138A1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -106.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B17BA782_BE82_F690_41E5_9A5C9C93389D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_camera"
  },
  {
   "media": "this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_camera"
  },
  {
   "media": "this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_camera"
  },
  {
   "media": "this.panorama_BCE199F0_B294_2E1B_41D1_E919D0034708",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_camera"
  },
  {
   "media": "this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_camera"
  },
  {
   "media": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_camera"
  },
  {
   "media": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_camera"
  },
  {
   "media": "this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A_camera"
  },
  {
   "media": "this.panorama_BCF3EF0B_B294_220E_41BC_895572243E28",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3EF0B_B294_220E_41BC_895572243E28_camera"
  },
  {
   "media": "this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_camera"
  },
  {
   "media": "this.panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_camera"
  },
  {
   "media": "this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_camera"
  },
  {
   "media": "this.panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_camera"
  },
  {
   "media": "this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_camera"
  },
  {
   "media": "this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_camera"
  },
  {
   "media": "this.panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_camera"
  },
  {
   "media": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_camera"
  },
  {
   "media": "this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_camera"
  },
  {
   "media": "this.panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_camera"
  },
  {
   "media": "this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_camera"
  },
  {
   "media": "this.panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_camera"
  },
  {
   "media": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_camera"
  },
  {
   "media": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_camera"
  },
  {
   "media": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B_camera"
  },
  {
   "media": "this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_camera"
  },
  {
   "media": "this.panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_camera"
  },
  {
   "media": "this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_camera"
  },
  {
   "media": "this.panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_camera"
  },
  {
   "media": "this.panorama_BCFF96CD_B297_E205_41BC_EC93C658E758",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_camera"
  },
  {
   "media": "this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4_camera"
  },
  {
   "media": "this.panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_camera"
  },
  {
   "media": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_camera"
  },
  {
   "media": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094_camera"
  },
  {
   "media": "this.panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_camera"
  },
  {
   "media": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345_camera"
  },
  {
   "media": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_camera"
  },
  {
   "media": "this.panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_camera"
  },
  {
   "media": "this.panorama_BCE37E62_B294_223E_41D5_683710308D0B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE37E62_B294_223E_41D5_683710308D0B_camera"
  },
  {
   "media": "this.panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_camera"
  },
  {
   "media": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_camera"
  },
  {
   "media": "this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_camera"
  },
  {
   "media": "this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_camera"
  },
  {
   "media": "this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571_camera"
  },
  {
   "media": "this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_camera"
  },
  {
   "media": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_camera"
  },
  {
   "media": "this.panorama_BCEDA408_B294_660B_41D2_CCAFD434536C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_camera"
  },
  {
   "media": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_camera"
  },
  {
   "media": "this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_camera"
  },
  {
   "media": "this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_camera"
  },
  {
   "media": "this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_camera"
  },
  {
   "media": "this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_camera"
  },
  {
   "media": "this.panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_camera"
  },
  {
   "media": "this.panorama_BCF6218B_B295_FE0D_41CD_547A369C9034",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 52, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 174.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEF33B22_BE82_FF93_41D9_125A038E882C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 48.79,
  "class": "PanoramaCameraPosition",
  "pitch": -0.47
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -104.27,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -0.96
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 14.63,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ADC49A25_BE82_F990_41E6_8124521AEBEB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 45.2,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 4.8,
    "targetPitch": -4.99,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 8.64
   },
   {
    "targetYaw": -85.01,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.8,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 97.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -6.09,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -37.12,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Habitaci\u00f3n S 1 Piso 2",
 "id": "panorama_BCF2CAB8_B294_220B_41DF_773112C84D39",
 "overlays": [
  "this.overlay_A6F9F7B9_B2FC_220D_41E4_E34396F194F3",
  "this.overlay_A6EB9B77_B2FC_2205_41E0_A090AA0C43CD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 52.42,
   "class": "AdjacentPanorama",
   "backwardYaw": -98.88,
   "panorama": "this.panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E",
   "distance": 1
  },
  {
   "yaw": -127.24,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.47,
   "panorama": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Habitacion P 3 Piso 2",
 "id": "panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34",
 "overlays": [
  "this.overlay_A15EDDED_B28F_E605_41E3_95E1B137D21C",
  "this.overlay_A6361CB7_B28C_2605_41D8_2365410F49EF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -95.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 73.73,
   "panorama": "this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40",
   "distance": 1
  },
  {
   "yaw": 114.67,
   "class": "AdjacentPanorama",
   "backwardYaw": 40.71,
   "panorama": "this.panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -179.95,
  "hfov": 129,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AD993724_BE82_F797_41DA_0022A8BDEA0F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 179.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC4B69DC_BE82_FAB0_41BA_BF3A07F8442A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -177.35,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 22.97,
    "targetPitch": 12.53,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 45.14
   },
   {
    "targetYaw": 81.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.52,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.72,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -18.17,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -25.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ACA3CC5A_BE82_F9B3_41C0_E3EC7C2AAF4D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -87.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE9A6A8F_BE82_FE90_41E5_8002B9C71CE5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -127.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE9277BE_BE82_F6F0_41E7_54F6600DDA7A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 19,
  "class": "PanoramaCameraPosition",
  "pitch": 4.06
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -62.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ADB33A1D_BE82_F9B1_41CE_E44DADED72CE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_camera"
  },
  {
   "media": "this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_camera"
  },
  {
   "media": "this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_camera"
  },
  {
   "media": "this.panorama_BCE199F0_B294_2E1B_41D1_E919D0034708",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_camera"
  },
  {
   "media": "this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_camera"
  },
  {
   "media": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_camera"
  },
  {
   "media": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_camera"
  },
  {
   "media": "this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A_camera"
  },
  {
   "media": "this.panorama_BCF3EF0B_B294_220E_41BC_895572243E28",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3EF0B_B294_220E_41BC_895572243E28_camera"
  },
  {
   "media": "this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_camera"
  },
  {
   "media": "this.panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_camera"
  },
  {
   "media": "this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_camera"
  },
  {
   "media": "this.panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_camera"
  },
  {
   "media": "this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_camera"
  },
  {
   "media": "this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_camera"
  },
  {
   "media": "this.panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_camera"
  },
  {
   "media": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_camera"
  },
  {
   "media": "this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_camera"
  },
  {
   "media": "this.panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_camera"
  },
  {
   "media": "this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_camera"
  },
  {
   "media": "this.panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_camera"
  },
  {
   "media": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_camera"
  },
  {
   "media": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_camera"
  },
  {
   "media": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B_camera"
  },
  {
   "media": "this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_camera"
  },
  {
   "media": "this.panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_camera"
  },
  {
   "media": "this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_camera"
  },
  {
   "media": "this.panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_camera"
  },
  {
   "media": "this.panorama_BCFF96CD_B297_E205_41BC_EC93C658E758",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_camera"
  },
  {
   "media": "this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4_camera"
  },
  {
   "media": "this.panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_camera"
  },
  {
   "media": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_camera"
  },
  {
   "media": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094_camera"
  },
  {
   "media": "this.panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_camera"
  },
  {
   "media": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345_camera"
  },
  {
   "media": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_camera"
  },
  {
   "media": "this.panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_camera"
  },
  {
   "media": "this.panorama_BCE37E62_B294_223E_41D5_683710308D0B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE37E62_B294_223E_41D5_683710308D0B_camera"
  },
  {
   "media": "this.panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_camera"
  },
  {
   "media": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_camera"
  },
  {
   "media": "this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_camera"
  },
  {
   "media": "this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_camera"
  },
  {
   "media": "this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571_camera"
  },
  {
   "media": "this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_camera"
  },
  {
   "media": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_camera"
  },
  {
   "media": "this.panorama_BCEDA408_B294_660B_41D2_CCAFD434536C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_camera"
  },
  {
   "media": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_camera"
  },
  {
   "media": "this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_camera"
  },
  {
   "media": "this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_camera"
  },
  {
   "media": "this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_camera"
  },
  {
   "media": "this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_camera"
  },
  {
   "media": "this.panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_camera"
  },
  {
   "media": "this.panorama_BCF6218B_B295_FE0D_41CD_547A369C9034",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 145.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC1E39C1_BE82_FA91_41D6_C8907A1E8F4A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 53.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE3DFB54_BE82_FFB0_41D5_3DEAE0AA822E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 5.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC940942_BE82_FB90_41E6_E6E8435A2AC4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 176.89,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AFBDA890_BE82_FA8F_41DD_88D155AB3A7F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -157.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AFD368A7_BE82_FA90_41C8_A0E9D69C4D41",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 9.54,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 18.15,
    "targetPitch": 7.92,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 35.47
   },
   {
    "targetYaw": -145.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -9.94,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.35,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -29.43,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -15.98,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -9.26,
  "hfov": 129,
  "class": "PanoramaCameraPosition",
  "pitch": -8.54
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 71.07,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ADA50A15_BE82_F9B1_41C8_A74210DE7E4D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 123.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEFCEB18_BE82_FFB0_41E1_58F90F87D2A4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -161.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE937AA1_BE82_FE91_41CE_AFB3C76ED1ED",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 110.15,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ADF1CA3C_BE82_F9F0_41E1_924A74678A49",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -71.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE9F0A99_BE82_FEB1_41D5_5F14AC5426D9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pasillo 2 Piso 1",
 "id": "panorama_BCF67E95_B294_6205_41E6_4008DC577345",
 "overlays": [
  "this.overlay_A581B76C_B294_220B_41E2_C3CF23E91DAD",
  "this.overlay_A581EE63_B294_223E_41B8_ACDF70FE7F79",
  "this.overlay_A5FBFFD5_B294_2205_41D6_BBFDC66D6532",
  "this.overlay_A60710B8_B293_DE0B_41D7_6A53A84E287E",
  "this.overlay_A591AD1C_B29C_260B_41E5_1609317911D1",
  "this.overlay_A3CE488B_B594_1F6D_41E2_DAF2A43D9141"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -143.33,
   "class": "AdjacentPanorama",
   "backwardYaw": 61.25,
   "panorama": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
   "distance": 1
  },
  {
   "yaw": 42.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -59.78,
   "panorama": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "distance": 1
  },
  {
   "yaw": 59.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 155.54,
   "panorama": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "distance": 1
  },
  {
   "yaw": 167.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 84.31,
   "panorama": "this.panorama_BCE37E62_B294_223E_41D5_683710308D0B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Terraza 1",
 "id": "panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E",
 "overlays": [
  "this.overlay_A225C117_B29C_DE05_41E0_0C4CE54E91DE",
  "this.overlay_A63B2BE4_B6D5_A5F4_4193_343AED842967"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -135.13,
   "class": "AdjacentPanorama",
   "backwardYaw": -60.71,
   "panorama": "this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D",
   "distance": 1
  },
  {
   "yaw": -133.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 22.45,
   "panorama": "this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 22.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B165A77A_BE82_F670_41D6_C3D713C6445D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 96.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AED3EAFA_BE82_FE70_41D8_59BD74710E4A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -161.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE093B2A_BE82_FF93_41AC_6CC571D25BC8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 61.67,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AFAFA889_BE82_FA91_41A2_6283B91631B5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pasillo Piso 2",
 "id": "panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
 "overlays": [
  "this.overlay_A11A94FB_B29C_E60D_41D0_8D8502D57E81",
  "this.overlay_A1456C90_B29C_261B_41BD_F9A10C71356D",
  "this.overlay_A11564EB_B29C_260D_41D5_6A4CE8C0A213",
  "this.overlay_A2A67653_B6CF_AED3_41E6_804ACA3BFEA0",
  "this.overlay_A3E7C0A3_B6CC_A273_41D1_B060EF130F1E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 171.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -113.09,
   "panorama": "this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943",
   "distance": 1
  },
  {
   "yaw": -165.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -23.44,
   "panorama": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A",
   "distance": 1
  },
  {
   "yaw": 10.84,
   "class": "AdjacentPanorama",
   "backwardYaw": 59.91,
   "panorama": "this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28",
   "distance": 1
  },
  {
   "yaw": 92.36,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.86,
   "panorama": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
   "distance": 1
  },
  {
   "yaw": -83.22,
   "class": "AdjacentPanorama",
   "backwardYaw": -85.39,
   "panorama": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -137.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ACC22976_BE82_FA70_41E7_B4316CCEFAED",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Piscina 2",
 "id": "panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63",
 "overlays": [
  "this.overlay_A35DDE43_B694_13DD_41DA_B50490B813A5",
  "this.overlay_A34A230D_B69C_1164_41D2_523E9713FC6C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -52.95,
   "class": "AdjacentPanorama",
   "backwardYaw": 108.05,
   "panorama": "this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B",
   "distance": 1
  },
  {
   "yaw": -147.51,
   "class": "AdjacentPanorama",
   "backwardYaw": -114.84,
   "panorama": "this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 94.61,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE369847_BE82_F990_41C5_00D996FA3FE2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -8.63,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC2DE9CB_BE82_FA90_41C0_09B0F779D842",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 45.2,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 7.64,
    "targetPitch": -4.99,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 14.34
   },
   {
    "targetYaw": -85.01,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.8,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 97.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -6.09,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -37.12,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -86.73,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B1757794_BE82_F6B0_41DC_D1FD98B6A46E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Entrada 2",
 "id": "panorama_BCEABDE6_B294_E607_41E1_88A4981F631C",
 "overlays": [
  "this.overlay_A3B03E31_B594_13BD_41D3_974DC13A7193",
  "this.overlay_A386E8BA_B594_70AC_41E4_A461BFCF4CD8",
  "this.overlay_A39912AD_B594_10A5_41DC_4C47E8D4EB26"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 18.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -116.43,
   "panorama": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC",
   "distance": 1
  },
  {
   "yaw": -150.88,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.69,
   "panorama": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 9.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC7839F6_BE82_FA70_41D4_D9F6F4A0258A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 124.06,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE8197A4_BE82_F690_41E0_81A68DE6C051",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 96.78,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF1E0BD9_BE82_FEB0_41DE_717D7ABC1767",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 45.2,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 7.36,
    "targetPitch": -4.99,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 13.78
   },
   {
    "targetYaw": -85.01,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.8,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 97.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -6.09,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -37.12,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -169.55,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEEFCB09_BE82_FF90_41E6_FFE92BEBAA0B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 52.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF3BFBE9_BE82_FE90_41D6_634D9C47B103",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -118.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AED857FB_BE82_F670_41CF_DB8388D59892",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 9.54,
  "class": "PanoramaCameraPosition",
  "pitch": 7.92
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -145.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -9.94,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.35,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -29.43,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -15.98,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -159.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE612B74_BE82_FE70_41E6_B2BA267BB623",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 15.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 63.01,
    "targetPitch": 3.99,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 125.6
   },
   {
    "targetYaw": 57.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -14.05,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Patio 1",
 "id": "panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273",
 "overlays": [
  "this.overlay_ACAA9B16_B58C_3164_41D1_D1A4B60E77C1",
  "this.overlay_A3AFA20C_B58C_136B_41DF_2BF4D20F8B28",
  "this.overlay_F9256439_B777_625C_41E6_18134498E027"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BCEDA408_B294_660B_41D2_CCAFD434536C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 52.97,
   "class": "AdjacentPanorama",
   "backwardYaw": 4.53,
   "panorama": "this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571",
   "distance": 1
  },
  {
   "yaw": 179.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -18.07,
   "panorama": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -95.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEFA4815_BE82_F9B0_41DC_76554C0CEEE9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -65.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AECBDAD9_BE82_FEB0_41E4_251448881709",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -151.42,
  "class": "PanoramaCameraPosition",
  "pitch": 9.02
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 152.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEA9B7C7_BE82_F691_41D4_8F3ABCC55DAB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -41.19,
  "class": "PanoramaCameraPosition",
  "pitch": -0.38
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 55.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF2AE8CF_BE82_FA90_41B8_B7D1684D9B83",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -1.77,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": -2.99
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 155.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ACB24963_BE82_FB90_41D9_54DA9F7D7054",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ducha Habitaci\u00f3n Piso 1",
 "id": "panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A",
 "overlays": [
  "this.overlay_A79FC131_B3BD_DE1D_41CB_6D0DB5D6FBA8",
  "this.overlay_A6640D08_B3BC_260B_41DC_5121CDCA6EA7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -69.85,
   "class": "AdjacentPanorama",
   "backwardYaw": 100.94,
   "panorama": "this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -128.19,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -14.32
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -115.76,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -47.55,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -9.53,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE4B8B5B_BE82_FFB0_41CA_1EB3A33A2E05",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -173.14,
  "class": "PanoramaCameraPosition",
  "pitch": 1.91
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Habitacion P 4 Piso 2",
 "id": "panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B",
 "overlays": [
  "this.overlay_A16BEE30_B28C_621A_41B4_A0885BB8C271",
  "this.overlay_ACA27E65_B6FC_DEF7_41E6_D85BF0C0F9B7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 40.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 114.67,
   "panorama": "this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -31.74,
  "class": "PanoramaCameraPosition",
  "pitch": -1.08
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Sala 3 Piso 2",
 "id": "panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62",
 "overlays": [
  "this.overlay_A6C644CF_B2F5_E605_41C2_03F4FA4A3D05",
  "this.overlay_A11C2CBC_B2F4_660B_41C3_9754038D0D88"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -164.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -34.84,
   "panorama": "this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 129.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE8707AC_BE82_F690_41E3_A063BD1B0A0F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Solar",
 "id": "panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3",
 "overlays": [
  "this.overlay_A35C1888_B69C_3F6B_41DC_F150EEDBD9B3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -131.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -60.76,
   "panorama": "this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -0.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC0E69B6_BE82_FAF3_41BB_9C50A1C4FFD1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Habitaci\u00f3n 3 Piso 1",
 "id": "panorama_BCFF96CD_B297_E205_41BC_EC93C658E758",
 "overlays": [
  "this.overlay_A639D286_B38C_2207_41E0_B4CD2BCB7DDA",
  "this.overlay_84CA4BFE_B73C_A5D5_41B3_056930E024CD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -49.2,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.2,
   "panorama": "this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pasillo Habitaci\u00f3n S Piso 2",
 "id": "panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26",
 "overlays": [
  "this.overlay_A12EA653_B2FC_221E_41C2_244655C0F12F",
  "this.overlay_A6B164AD_B2FC_6605_41C7_EEEB1ADB06D2",
  "this.overlay_A7BA2C5E_B2FC_2607_41E1_FDAC1ECFC99D",
  "this.overlay_A6F966CC_B2FC_220B_41E4_05F197B134E0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -85.39,
   "class": "AdjacentPanorama",
   "backwardYaw": -83.22,
   "panorama": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 87.47,
   "class": "AdjacentPanorama",
   "backwardYaw": -127.24,
   "panorama": "this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39",
   "distance": 1
  },
  {
   "yaw": -3.11,
   "class": "AdjacentPanorama",
   "backwardYaw": -132.19,
   "panorama": "this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 32.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC6859ED_BE82_FA90_41C8_FDD06BD73273",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 51.65,
  "class": "PanoramaCameraPosition",
  "pitch": 3.53
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Terraza 4",
 "id": "panorama_BCE199F0_B294_2E1B_41D1_E919D0034708",
 "overlays": [
  "this.overlay_A1D575FB_B294_660D_41E6_37913D75622D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 20.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 101.76,
   "panorama": "this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ducha Habitaci\u00f3n S Piso 2",
 "id": "panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED",
 "overlays": [
  "this.overlay_A6E80BC6_B2FC_6206_41D6_C9A2D50EB19B",
  "this.overlay_A900D003_B6F4_E233_41E0_F870378D67EA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -118.33,
   "class": "AdjacentPanorama",
   "backwardYaw": 48.26,
   "panorama": "this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -24.61,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": -0.74
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF2A352_B294_621F_41E3_5375F364F10B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 32.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEB937E1_BE82_F690_41E0_CC765E7B9001",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ducha Habitaci\u00f3n P Piso 2",
 "id": "panorama_BCF3EF0B_B294_220E_41BC_895572243E28",
 "overlays": [
  "this.overlay_A151E8BA_B294_EE0C_41D7_D78A106E34D6",
  "this.overlay_A1330E00_B2F4_65FB_41DB_A2656859E799"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -67.45,
   "class": "AdjacentPanorama",
   "backwardYaw": 78.9,
   "panorama": "this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -125.19,
  "class": "PanoramaCameraPosition",
  "pitch": 7.16
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -177.35,
  "class": "PanoramaCameraPosition",
  "pitch": 12.53
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 81.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.52,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.72,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -18.17,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -154.91,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AD01AA46_BE82_F990_41D9_D7A179432220",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Escaleras Piso 1",
 "id": "panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
 "overlays": [
  "this.overlay_A684DD2A_B28C_260F_41D9_A1A49E440FE4",
  "this.overlay_A6D0D2F2_B394_621F_41C1_6AE9CCDBB52A",
  "this.overlay_A710796D_B395_EE0A_41DA_0752F21353DE",
  "this.overlay_A712B490_B394_E61B_41A2_38730A7C0792",
  "this.overlay_A63E7C81_B3BC_66FA_41DD_AC4A0678A292",
  "this.overlay_90726D0E_B6DC_E235_41B5_EA8C6D07F42F",
  "this.overlay_91AF2A5B_B6D5_E6D3_41E0_9AFC4D063CAF",
  "this.overlay_915A78EA_B6D5_63FD_41C2_E6B76608423C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 146.95,
   "class": "AdjacentPanorama",
   "backwardYaw": 70.43,
   "panorama": "this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4",
   "distance": 1
  },
  {
   "yaw": -126.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -150.57,
   "panorama": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "distance": 1
  },
  {
   "yaw": 49.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.05,
   "panorama": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A",
   "distance": 1
  },
  {
   "yaw": -27.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 132.33,
   "panorama": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "distance": 1
  },
  {
   "yaw": 92.15,
   "class": "AdjacentPanorama",
   "backwardYaw": 133.96,
   "panorama": "this.panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -124.46,
   "class": "AdjacentPanorama",
   "backwardYaw": -157.73,
   "panorama": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 152.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ACD07985_BE82_FA91_41D6_46CC23E05F39",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -143.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF858877_BE82_FA70_41A5_1C688589DF98",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -120.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AECC67F3_BE82_F670_41D7_747111D66D33",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -93.88,
  "class": "PanoramaCameraPosition",
  "pitch": 1.97
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 36.21,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF673C18_BE82_F9B0_41AA_BBA2AFFBEF0A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -128.19,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 75.66,
    "targetPitch": -14.32,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 151.01
   },
   {
    "targetYaw": -115.76,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -47.55,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 15.91,
  "class": "PanoramaCameraPosition",
  "pitch": 3.99
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 57.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -14.05,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -127.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEA95AA9_BE82_FE91_41C8_2627486101CC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Calle",
 "id": "panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC",
 "overlays": [
  "this.overlay_A355CF73_B574_11BD_41E0_5D4FB1E55AEB",
  "this.overlay_ACD895B7_B574_10A5_41C0_121645A3CBB6",
  "this.overlay_A3613C37_B574_37A5_41D8_B29C6D57DA6F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -24.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -56.55,
   "panorama": "this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C",
   "distance": 1
  },
  {
   "yaw": -113.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.39,
   "panorama": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "distance": 1
  },
  {
   "yaw": -116.43,
   "class": "AdjacentPanorama",
   "backwardYaw": 18.72,
   "panorama": "this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 105.21,
  "class": "PanoramaCameraPosition",
  "pitch": -0.61
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Habitaci\u00f3n 1 Piso 1",
 "id": "panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012",
 "overlays": [
  "this.overlay_A66A75AE_B3BC_2607_41E0_99495DC1CE0C",
  "this.overlay_A66EEB8F_B3B4_2206_41D9_B472B986BFC2",
  "this.overlay_A65E32F1_B3B4_E21A_41E5_162020AE7575"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -147.58,
   "class": "AdjacentPanorama",
   "backwardYaw": -55.94,
   "panorama": "this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B",
   "distance": 1
  },
  {
   "yaw": 117.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -50.11,
   "panorama": "this.panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40",
   "distance": 1
  },
  {
   "yaw": 31.2,
   "class": "AdjacentPanorama",
   "backwardYaw": -49.2,
   "panorama": "this.panorama_BCFF96CD_B297_E205_41BC_EC93C658E758",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 48.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF58E8F7_BE82_FA7F_41B0_BA19A994CAE0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -168.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0.99
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 68.55,
  "class": "PanoramaCameraPosition",
  "pitch": -2.33
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Habitaci\u00f3n 2 Piso 1",
 "id": "panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40",
 "overlays": [
  "this.overlay_A66E5240_B3B4_227A_41D4_EFF40490AE9A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -50.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 117.82,
   "panorama": "this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Zona Ropas",
 "id": "panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F",
 "overlays": [
  "this.overlay_A6614936_B38C_2E07_41C3_7B6F000998E3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 133.96,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.15,
   "panorama": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -175.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AFF2DBCA_BE82_FE90_41E5_445F89D928D6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -47.67,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AD94472C_BE82_F797_41D9_193A9DB7C62B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Entrada Piscina",
 "id": "panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C",
 "overlays": [
  "this.overlay_A3469FE2_B68C_10DC_41DF_6B5634CED5FB",
  "this.overlay_A327DE79_B68C_33AD_4193_D0A50D92FF3D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -56.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -24.28,
   "panorama": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC",
   "distance": 1
  },
  {
   "yaw": -170.83,
   "class": "AdjacentPanorama",
   "backwardYaw": 42.93,
   "panorama": "this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Comedor 2",
 "id": "panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4",
 "overlays": [
  "this.overlay_A3CA1829_B58C_1FAC_41D2_7D150963EF5A",
  "this.overlay_F74E4707_B75C_AE33_41CC_032D81451266"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -149.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.97,
   "panorama": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 75.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ACA40956_BE82_FBB0_41C8_FF1CC1BBFC34",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -158.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC84EC3A_BE82_F9F3_41C1_7518455C0D93",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 9.54,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 18.23,
    "targetPitch": 7.92,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 35.63
   },
   {
    "targetYaw": -145.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -9.94,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.35,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -29.43,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 24.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -15.98,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "displayOriginPosition": {
  "yaw": 22.02,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 1
 },
 "initialPosition": {
  "yaw": 22.02,
  "class": "PanoramaCameraPosition",
  "pitch": 6.35
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "targetPitch": 6.35,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -136.07,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -12.41,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 114.81,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -5.87
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF600D5_B297_FE05_41D8_251627B380F4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pasillo exterior 1",
 "id": "panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917",
 "overlays": [
  "this.overlay_A3E15370_B58C_11BC_41E6_4C27776DF80D",
  "this.overlay_ACFC9CC8_B58C_10EB_41E2_29DDE0C71B35"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 18.97,
   "class": "AdjacentPanorama",
   "backwardYaw": -174.39,
   "panorama": "this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571",
   "distance": 1
  },
  {
   "yaw": -90.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -104.77,
   "panorama": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 59.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ACE03992_BE82_FAB0_41C5_DBB1A76E610D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Escaleras Terraza",
 "id": "panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943",
 "overlays": [
  "this.overlay_A116EB46_B29C_6207_41E0_442B55E89DA4",
  "this.overlay_A6EC268E_B29C_2207_41DB_EF3BE4C5AF26"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -113.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.37,
   "panorama": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
   "distance": 1
  },
  {
   "yaw": -143.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.85,
   "panorama": "this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Sala 1",
 "id": "panorama_BCE37E62_B294_223E_41D5_683710308D0B",
 "overlays": [
  "this.overlay_A3E111D5_B594_10E5_41C5_6E273440BC6E",
  "this.overlay_A3427BAC_B594_F0AB_41E3_584E8B987CCD",
  "this.overlay_A3FBFB39_B594_11AD_41D3_81E8CDCC1CFB",
  "this.overlay_F45FECC5_B754_A237_41E4_F91A927F2A47",
  "this.overlay_FE64F1A8_B757_627D_41E3_AD93A9EDCAFA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 84.31,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.07,
   "panorama": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345",
   "distance": 1
  },
  {
   "yaw": 12.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 123.19,
   "panorama": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
   "distance": 1
  },
  {
   "yaw": -140.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 76.56,
   "panorama": "this.panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 112.55,
  "hfov": 129,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE8CB79C_BE82_F6B0_41D2_8F3B0096D30B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 43.2,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": -3.92
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -95.64,
  "class": "PanoramaCameraPosition",
  "pitch": 10.2
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Piscina 1",
 "id": "panorama_BCF7C56D_B294_2605_41E3_B770BFE12688",
 "overlays": [
  "this.overlay_AC08694A_B68C_31EF_41AF_C3038D9E6E8C",
  "this.overlay_A34189AB_B68C_10AD_41CD_E111D2202B16"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -114.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -147.51,
   "panorama": "this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63",
   "distance": 1
  },
  {
   "yaw": 42.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -170.83,
   "panorama": "this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 72.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AD8809FE_BE82_FA70_41DC_100E2D8E8D21",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 98.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ACFFA9A7_BE82_FA91_41E1_8DC728DA63CD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -119.81,
  "class": "PanoramaCameraPosition",
  "pitch": 9.37
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Cocina",
 "id": "panorama_BCF619F2_B294_2E1F_41E2_371766686094",
 "overlays": [
  "this.overlay_A6DC1EB1_B374_221D_41DE_D83EFBFFB4E6",
  "this.overlay_A7563243_B374_227D_41C1_948A1F8F4998",
  "this.overlay_8FA0D115_B74B_6254_41E5_98CB9C7406C4",
  "this.overlay_A3C42F48_B856_69D5_41DF_8253C2CD632F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 108.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -64.58,
   "panorama": "this.panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4",
   "distance": 1
  },
  {
   "yaw": -157.73,
   "class": "AdjacentPanorama",
   "backwardYaw": -124.46,
   "panorama": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -158.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 20.09,
   "panorama": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -148.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEE5BB10_BE82_FFB0_41CF_2B608A604ABB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 47.81,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF493BF2_BE82_FE70_41E7_CBDCB65BB32B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Patio 2",
 "id": "panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
 "overlays": [
  "this.overlay_AEF6F510_B58C_117B_41D8_422DB0D5A80D",
  "this.overlay_AC6E0ACB_B58C_30EC_41E2_41132314EFCA",
  "this.overlay_AC95861D_B58C_1365_41E3_7692D9258B2E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 71.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -120.41,
   "panorama": "this.panorama_BCEDA408_B294_660B_41D2_CCAFD434536C",
   "distance": 1
  },
  {
   "yaw": 36.75,
   "class": "AdjacentPanorama",
   "backwardYaw": -81.16,
   "panorama": "this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
   "distance": 1
  },
  {
   "yaw": -18.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.83,
   "panorama": "this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 21.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE55CB6B_BE82_FF90_41BA_439FFE1B5582",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -159.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF3AB8D8_BE82_FAB0_41B5_F3B416805ED3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -118.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE203B4B_BE82_FF90_41E2_C17C1E366C1D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 56.83,
  "class": "PanoramaCameraPosition",
  "pitch": 12.47
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -79.06,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AC55C6F7_BE82_F671_41CF_02440CF149EB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Habitacion P 1 Piso 2",
 "id": "panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40",
 "overlays": [
  "this.overlay_A157E29E_B294_2207_41DB_A8AFF0017D7B",
  "this.overlay_A7E706F3_B294_621D_41E5_19D2605D803E",
  "this.overlay_A7515888_B294_2E0B_41E6_514DE0AF929D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 154.73,
   "class": "AdjacentPanorama",
   "backwardYaw": -83.52,
   "panorama": "this.panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A",
   "distance": 1
  },
  {
   "yaw": 73.73,
   "class": "AdjacentPanorama",
   "backwardYaw": -95.09,
   "panorama": "this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34",
   "distance": 1
  },
  {
   "yaw": -107.82,
   "class": "AdjacentPanorama",
   "backwardYaw": 10.45,
   "panorama": "this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -33.14,
  "class": "PanoramaCameraPosition",
  "pitch": 9.64
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -130.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ADE23A35_BE82_F9F0_41DD_646FAA54F6E9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 44.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF59DBF9_BE82_FE70_41E2_E434DC4EADBD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 22.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 3.39,
    "targetPitch": 6.35,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 5.8
   },
   {
    "targetYaw": -136.07,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -12.41,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Comedor 1",
 "id": "panorama_BCFCE91F_B294_6E06_41E4_BEB998639147",
 "overlays": [
  "this.overlay_A3F57B2F_B58C_31A5_41B1_C3B0D323E499",
  "this.overlay_A3ACC614_B58C_137B_41E1_232DBC95532F",
  "this.overlay_AC5CAF7E_B58C_11A7_41D5_27EB46ACF8EF",
  "this.overlay_A3FB9C62_B58C_17DF_41B2_2D2AE041D46F",
  "this.overlay_A3DD8EFE_B58C_70A7_41B4_362FA234601A",
  "this.overlay_A3D22D14_B594_117B_41E6_760EE19E43F8",
  "this.overlay_8B6BE10B_B75C_E233_41D1_BA093F4471F8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 61.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -143.33,
   "panorama": "this.panorama_BCF67E95_B294_6205_41E6_4008DC577345",
   "distance": 1
  },
  {
   "yaw": -27.97,
   "class": "AdjacentPanorama",
   "backwardYaw": -149.79,
   "panorama": "this.panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4",
   "distance": 1
  },
  {
   "yaw": 61.19,
   "class": "AdjacentPanorama",
   "backwardYaw": -60.26,
   "panorama": "this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7",
   "distance": 1
  },
  {
   "yaw": -81.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 36.75,
   "panorama": "this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D",
   "distance": 1
  },
  {
   "yaw": 123.19,
   "class": "AdjacentPanorama",
   "backwardYaw": 12.05,
   "panorama": "this.panorama_BCE37E62_B294_223E_41D5_683710308D0B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_BCF619F2_B294_2E1F_41E2_371766686094",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 120.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AED43804_BE82_F990_41D6_81CF6AD266BC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -101.1,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE50D857_BE82_F9B0_41C8_9E569B47D5C9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 138.42,
  "class": "PanoramaCameraPosition",
  "pitch": 1.77
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -46.04,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B160B771_BE82_F670_41E6_15FF5FC5A9E6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 119.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AFCA5897_BE82_FAB0_41BB_475AA310E4B2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -177.35,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 19.28,
    "targetPitch": 12.53,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 37.74
   },
   {
    "targetYaw": 81.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.52,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.72,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -18.17,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 15.14,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE38D83F_BE82_F9F0_41E2_9BFA405B6B02",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -137.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE130B42_BE82_FF90_41A3_7F5C90829553",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 89.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF660914_BE82_FBB0_41E7_6C75BBD7CA7C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Sala 1 Piso 2",
 "id": "panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28",
 "overlays": [
  "this.overlay_A15A77A4_B28C_223B_41D4_961EBEF9520D",
  "this.overlay_A1426398_B28C_220B_41CF_5CB6C0F48471",
  "this.overlay_A1539037_B2F3_FE05_41D2_2E8B1531C992"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 59.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 10.84,
   "panorama": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
   "distance": 1
  },
  {
   "yaw": -26.04,
   "class": "AdjacentPanorama",
   "backwardYaw": -133.62,
   "panorama": "this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7",
   "distance": 1
  },
  {
   "panorama": "this.panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -57.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AF761927_BE82_FB90_41A4_50761FCA8F37",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Escaleras Piso 2",
 "id": "panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A",
 "overlays": [
  "this.overlay_A6E6238D_B28C_220A_41E3_B57DEA725058",
  "this.overlay_A6CDE92C_B28C_2E0A_4194_F30F37CAF4C8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -23.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -165.37,
   "panorama": "this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F",
   "distance": 1
  },
  {
   "yaw": 0.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 49.53,
   "panorama": "this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 29.99,
  "class": "PanoramaCameraPosition",
  "pitch": -7.19
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 130.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE9CF7B6_BE82_F6F0_41BB_32825CE77230",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 174.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEBF6AC9_BE82_FE90_41E2_86E131E30394",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "items": [
  {
   "media": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_camera"
  },
  {
   "media": "this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_camera"
  },
  {
   "media": "this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_camera"
  },
  {
   "media": "this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_camera"
  },
  {
   "media": "this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_camera"
  },
  {
   "media": "this.panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_camera"
  },
  {
   "media": "this.panorama_BCF6218B_B295_FE0D_41CD_547A369C9034",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_camera"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -11.09,
  "class": "PanoramaCameraPosition",
  "pitch": -2.49
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 32.97,
  "class": "PanoramaCameraPosition",
  "pitch": 2.87
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -33.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AFFFC8B7_BE82_FAF1_41E3_6EA348D77731",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BCF6218B_B295_FE0D_41CD_547A369C9034_t.jpg",
 "class": "Panorama",
 "label": "Piscina 4",
 "id": "panorama_BCF6218B_B295_FE0D_41CD_547A369C9034",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 63.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEBA6AC0_BE82_FE8F_41DF_0E763C25D767",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 168.66,
  "class": "PanoramaCameraPosition",
  "pitch": 3.13
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCE8535C_B294_220B_419C_97E4DBF51571_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -87.64,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AD867A07_BE82_F991_41DD_F0751B3218BA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "targetYaw": 45.2,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.32,
    "targetPitch": -4.99,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.79
   },
   {
    "targetYaw": -85.01,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -16.8,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 97.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -6.09,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -167.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "pitchSpeed": 17.05,
    "targetPitch": -37.12,
    "class": "TargetPanoramaCameraMovement",
    "yawSpeed": 33.25
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 84.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AEE8FB01_BE82_FF90_41E7_7C41A24DB49E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 29.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AD8F771B_BE82_F7B1_41CF_486529C14BF2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -79.1,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": -1.01
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -58.3,
  "class": "PanoramaCameraPosition",
  "pitch": -3.88
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -71.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_AE003B32_BE82_FFF3_41E5_C85815AC2A50",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipFontWeight": "normal",
 "maxWidth": 1920,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "right": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "minHeight": 480,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 854,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "class": "ViewerArea",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "maxHeight": 1080,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 20,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "fade_out_fade_in",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": 0,
 "playbackBarLeft": 0,
 "bottom": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "children": [
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918"
 ],
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "width": 271,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "bottom": 20,
 "height": 97,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": 0,
 "backgroundColorRatios": [
  0,
  0.48,
  1
 ],
 "propagateClick": true,
 "overflow": "visible",
 "backgroundColor": [
  "#00CBDA",
  "#3538E8",
  "#B304E4"
 ],
 "minWidth": 1,
 "height": 60,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "horizontal",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "--BUTTON SET"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "width": 60,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": 15,
 "layout": "vertical",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": 62,
 "backgroundColorRatios": [
  0.02
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "height": 300,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 30,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": 90,
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "---INFO photo"
 },
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "---LOCATION"
 },
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "---FLOORPLAN"
 },
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "---REALTOR"
 },
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 1,
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "width": 60,
 "fontFamily": "Arial",
 "backgroundOpacity": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "backgroundColor": [
  "#F7931E"
 ],
 "pressedIconWidth": 30,
 "minWidth": 1,
 "mode": "toggle",
 "iconBeforeLabel": true,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 30,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Settings Mute"
 },
 "pressedIconHeight": 30
},
{
 "horizontalAlign": "center",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 1,
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "width": 60,
 "fontFamily": "Arial",
 "backgroundOpacity": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "backgroundColor": [
  "#F7931E"
 ],
 "pressedIconWidth": 30,
 "minWidth": 1,
 "mode": "toggle",
 "iconBeforeLabel": true,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 30,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "pressedIconHeight": 30
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.69,
   "yaw": -108.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918, this.camera_B1757794_BE82_F6B0_41DC_D1FD98B6A46E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_1_HS_0_0.png",
      "width": 721,
      "class": "ImageResourceLevel",
      "height": 713
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.52,
   "yaw": -108.93
  }
 ],
 "id": "overlay_A6E4DD05_B294_6605_41E2_C92C885527A9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.77,
   "yaw": 78.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF3EF0B_B294_220E_41BC_895572243E28, this.camera_AE8CB79C_BE82_F6B0_41D2_8F3B0096D30B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7D2FDC_B74F_5DD4_41E1_DC8F0ECD6612",
   "pitch": -49.09,
   "hfov": 15.77,
   "yaw": 78.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A63AE262_B294_223F_41E4_134E4A27BD52",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.26,
   "yaw": -139.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7B4FE6_B74F_5DF5_41E4_F70E69EB795B",
   "pitch": -26.49,
   "hfov": 12.26,
   "yaw": -139.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A603DF5C_B38C_620B_41E3_C7BBF4996339",
 "data": {
  "label": "Arrow 06b Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.82,
   "yaw": -113.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_1_0.png",
      "width": 328,
      "class": "ImageResourceLevel",
      "height": 328
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.19,
   "yaw": -113.19
  }
 ],
 "id": "overlay_A678B64E_B38C_2207_41AF_1CA339D506C2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.31,
   "yaw": 20.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF619F2_B294_2E1F_41E2_371766686094, this.camera_AE55CB6B_BE82_FF90_41BA_439FFE1B5582); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7B3FE6_B74F_5DF5_41B5_75D4A3D4F706",
   "pitch": -41.33,
   "hfov": 17.31,
   "yaw": 20.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A7C8F46D_B38C_E605_41DD_990F75553A1C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.88,
   "yaw": 122.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0, this.camera_AE47CB63_BE82_FF90_41DE_0C524250E15E); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7BDFE7_B74F_5DF3_41CC_6219851F394C",
   "pitch": -31.04,
   "hfov": 11.88,
   "yaw": 122.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A65300A6_B38C_5E07_41DD_924F60B4ABD4",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.81,
   "yaw": 176.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B, this.camera_AE4B8B5B_BE82_FFB0_41CA_1EB3A33A2E05); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7BEFE7_B74F_5DF3_41E4_58D517FE9F2B",
   "pitch": -40.02,
   "hfov": 10.81,
   "yaw": 176.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A6B399CE_B374_6E07_41BE_FD833F45CAD7",
 "data": {
  "label": "Arrow 06a Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.91,
   "yaw": -59.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF67E95_B294_6205_41E6_4008DC577345, this.camera_AE130B42_BE82_FF90_41A3_7F5C90829553); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7BBFE7_B74F_5DF3_41E2_690E25D5FCDC",
   "pitch": -25.58,
   "hfov": 17.91,
   "yaw": -59.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A48E8D8C_B374_E60B_41E5_6A7AF3B00CE8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.04,
   "yaw": -60.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147, this.camera_AE203B4B_BE82_FF90_41E2_C17C1E366C1D); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7A5FE7_B74F_5DF3_41E5_5D27BD7D398B",
   "pitch": -12.64,
   "hfov": 7.04,
   "yaw": -60.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_823DF04B_B73B_E233_41B3_8431C48D263F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.57,
   "yaw": -150.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA, this.camera_AE3DFB54_BE82_FFB0_41D5_3DEAE0AA822E); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9C72088F_B85A_976A_41B2_73208465234D",
   "pitch": -45.21,
   "hfov": 13.57,
   "yaw": -150.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A35A5AAB_B85A_A8AB_41E3_41E0D295A3AF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.36,
   "yaw": -158.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9C75888F_B85A_976A_41C5_C5FBAEE59C94",
   "pitch": 8.53,
   "hfov": 8.36,
   "yaw": -158.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A46E567C_B85B_9BAD_41A9_07E6F9FEF714",
 "data": {
  "label": "Circle Arrow 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.76,
   "yaw": -60.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3, this.camera_AF58E8F7_BE82_FA7F_41B0_BA19A994CAE0); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF71DFF3_B74F_5DD3_41D6_2AD242514B3D",
   "pitch": 0.71,
   "hfov": 10.76,
   "yaw": -60.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A32203F1_B69C_10BD_41E6_675DD40D1DD6",
 "data": {
  "label": "Circle Arrow 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.5,
   "yaw": 108.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63, this.camera_AF4968E0_BE82_FA90_41E1_8DF0237007DE); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF71EFF3_B74F_5DD3_41C7_91B38CECCEA9",
   "pitch": -8.34,
   "hfov": 9.5,
   "yaw": 108.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ACAC7056_B69C_2FE7_41DB_2A052CC263A4",
 "data": {
  "label": "Arrow 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.58,
   "yaw": -120.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D, this.camera_AEA08AB1_BE82_FEF1_41D2_B5FDF5F56E13); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF71EFF1_B74F_5DEC_41C3_D739530C0251",
   "pitch": -42.15,
   "hfov": 16.58,
   "yaw": -120.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_ACE3D251_B574_13FD_41C9_3ED1B5AFE731",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.17,
   "yaw": -132.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26, this.camera_AFBDA890_BE82_FA8F_41DD_88D155AB3A7F); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 27.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_1_HS_0_0.png",
      "width": 912,
      "class": "ImageResourceLevel",
      "height": 876
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10,
   "yaw": -132.19
  }
 ],
 "id": "overlay_A11965BD_B2FC_660A_41B5_37919A2C967C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.87,
   "yaw": 48.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED, this.camera_AFAFA889_BE82_FA91_41A2_6283B91631B5); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7E8FE0_B74F_5DED_41E4_D11BA96F0A92",
   "pitch": -47.16,
   "hfov": 16.87,
   "yaw": 48.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6F696B6_B2FC_E206_41E4_B4B1380586BA",
 "data": {
  "label": "Arrow 07b"
 }
},
{
 "horizontalAlign": "center",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 1,
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "width": 60,
 "fontFamily": "Arial",
 "backgroundOpacity": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "backgroundColor": [
  "#F7931E"
 ],
 "pressedIconWidth": 30,
 "rollOverIconHeight": 30,
 "minWidth": 1,
 "mode": "toggle",
 "iconBeforeLabel": true,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 30,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Settings HS"
 },
 "pressedIconHeight": 30
},
{
 "horizontalAlign": "center",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 1,
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "width": 60,
 "fontFamily": "Arial",
 "backgroundOpacity": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "backgroundColor": [
  "#F7931E"
 ],
 "pressedIconWidth": 30,
 "minWidth": 1,
 "mode": "toggle",
 "iconBeforeLabel": true,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "rollOverIconHeight": 30,
 "shadow": false,
 "iconWidth": 30,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Settings Gyro"
 },
 "pressedIconHeight": 30
},
{
 "horizontalAlign": "center",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 1,
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "width": 60,
 "fontFamily": "Arial",
 "backgroundOpacity": 1,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": 60,
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "shadow": false,
 "iconWidth": 30,
 "data": {
  "name": "Button settings VR"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.6,
   "yaw": -174.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917, this.camera_AE937AA1_BE82_FE91_41CE_AFB3C76ED1ED); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF763FEF_B74F_5DF4_41E4_998D0550FE82",
   "pitch": -20.21,
   "hfov": 6.6,
   "yaw": -174.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3BE4913_B58C_117D_41D2_272BE5657E02",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.64,
   "yaw": 4.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273, this.camera_AEA95AA9_BE82_FE91_41C8_2627486101CC); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF76CFF0_B74F_5DEC_41D0_862476A6D875",
   "pitch": -18.68,
   "hfov": 5.64,
   "yaw": 4.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC6CF670_B58C_13BB_41E5_7D3E6F2E0DCC",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.36,
   "yaw": 153.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7, this.camera_AF761927_BE82_FB90_41A4_50761FCA8F37); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF74AFEE_B74F_5DF4_41DC_6014F6304C36",
   "pitch": -29.93,
   "hfov": 11.36,
   "yaw": 153.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A3459C80_B594_175B_41B0_B5016DEACF26",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.81,
   "yaw": -5.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C, this.camera_AC84F934_BE82_FBF0_41E1_75A2F2DE7E43); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF774FEE_B74F_5DF4_41D0_100CD2B0DBEC",
   "pitch": -20.71,
   "hfov": 19.81,
   "yaw": -5.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3EC57E4_B594_10DB_41E4_457C674F15AD",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.76,
   "yaw": -5.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC, this.camera_AF688906_BE82_FB90_41D7_DDA40B4ED033); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF771FEE_B74F_5DF4_41BF_BEA81573A861",
   "pitch": -6.59,
   "hfov": 6.76,
   "yaw": -5.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A84D05ED_B594_10A4_41A9_DBA42200C405",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.19,
   "yaw": -104.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917, this.camera_AF660914_BE82_FBB0_41E7_6C75BBD7CA7C); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF772FEE_B74F_5DF4_41D4_6FA80A227FD5",
   "pitch": -8.73,
   "hfov": 24.19,
   "yaw": -104.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3985956_B594_11E7_41D6_B17047DD216F",
 "data": {
  "label": "Circle Generic 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.65,
   "yaw": 21.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D, this.camera_AF8CCB83_BE82_FE90_41CF_8CD291C1255E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7D5FDA_B74F_5DDC_41A8_0D68074C06EA",
   "pitch": -16.58,
   "hfov": 16.65,
   "yaw": 21.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1102A1B_B294_620E_41C6_0AFD68920E5F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.79,
   "yaw": 101.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE199F0_B294_2E1B_41D1_E919D0034708, this.camera_AE612B74_BE82_FE70_41E6_B2BA267BB623); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7D7FDA_B74F_5DDC_41C2_2D321A161855",
   "pitch": -29.29,
   "hfov": 23.79,
   "yaw": 101.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6E69AE0_B294_223B_41E1_8EA28F4153E5",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.56,
   "yaw": 22.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E, this.camera_AF966B93_BE82_FEB1_41E4_DA17FF6F4EA8); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7D0FDA_B74F_5DDC_41E1_958D850EC6AA",
   "pitch": -8.91,
   "hfov": 4.56,
   "yaw": 22.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A118C749_B294_620D_41D9_311280482196",
 "data": {
  "label": "Arrow 02c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.07,
   "yaw": 76.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE37E62_B294_223E_41D5_683710308D0B, this.camera_AE42B84F_BE82_F990_41B4_E02EC879BD88); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF747FED_B74F_5DF4_4196_F3E62E6C5D37",
   "pitch": -37.83,
   "hfov": 11.07,
   "yaw": 76.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3C66036_B594_EFA7_41A2_11A03EB23B88",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.14,
   "yaw": 56.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF743FED_B74F_5DF4_41E1_F3B084564D18",
   "pitch": -19.08,
   "hfov": 9.14,
   "yaw": 56.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3A4236E_B594_31A7_41E3_F3D7A5338CCC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.37,
   "yaw": 103.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF74DFED_B74F_5DF4_41B6_0C0047A5BAAC",
   "pitch": -19.99,
   "hfov": 7.37,
   "yaw": 103.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC691B70_B594_11BB_41E0_91D054FDD64E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.56,
   "yaw": 53.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_3_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88,
   "yaw": 53.98
  }
 ],
 "id": "overlay_F3F410E6_B755_63F5_41B3_43A112BBD5A7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.89,
   "yaw": 112.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_4_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF74EFED_B74F_5DF4_4194_F5F80A8B45A8",
   "pitch": -17.72,
   "hfov": 5.89,
   "yaw": 112.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FFF6FB46_B74D_A634_41D1_3C89F5F80468",
 "data": {
  "label": "Arrow 06b Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.96,
   "yaw": 100.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A, this.camera_ADF1CA3C_BE82_F9F0_41E1_924A74678A49); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF78CFE4_B74F_5DF5_41DB_72507EDE25BA",
   "pitch": -49.77,
   "hfov": 16.96,
   "yaw": 100.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A677D88F_B3BC_2E05_41D7_EFC39973BFD7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.46,
   "yaw": -86.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B, this.camera_AD01AA46_BE82_F990_41D9_D7A179432220); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF789FE4_B74F_5DF5_419C_2921CB35C5DD",
   "pitch": -48.33,
   "hfov": 17.46,
   "yaw": -86.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A66464B6_B3BC_E606_41CA_DE4D2DC1AF23",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.67,
   "yaw": -98.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39, this.camera_AE9277BE_BE82_F6F0_41E7_54F6600DDA7A); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF79DFE1_B74F_5DEF_41D3_631D30AD7843",
   "pitch": -39.6,
   "hfov": 14.67,
   "yaw": -98.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A69FC48F_B2F4_2605_41B7_882B095D5499",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.71,
   "yaw": -106.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF79FFE1_B74F_5DEF_419A_1FCC32ABB1CB",
   "pitch": -24.13,
   "hfov": 6.71,
   "yaw": -106.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6C350C4_B2F4_7E7B_41D9_ED8FC1575B96",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.68,
   "yaw": -60.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E, this.camera_AF59DBF9_BE82_FE70_41E2_E434DC4EADBD); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF62DFD9_B74F_5DDC_41D8_82EFD567B5B9",
   "pitch": -11.48,
   "hfov": 11.68,
   "yaw": -60.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6A05E9E_B294_2206_4198_456CF856B339",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.08,
   "yaw": 91.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4, this.camera_AC84EC3A_BE82_F9F3_41C1_7518455C0D93); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF62FFD9_B74F_5DDC_41D4_E08BC3E532CB",
   "pitch": -20.4,
   "hfov": 15.08,
   "yaw": 91.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4C571CE_B294_7E07_41D1_47E11FFE9D44",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.48,
   "yaw": 50,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF628FDA_B74F_5DDC_41E4_008EAFE5FB0C",
   "pitch": -15.86,
   "hfov": 15.48,
   "yaw": 50,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A10D4886_B294_6E07_41A8_FDEB9B15FA4E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.7,
   "yaw": -0.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_1_HS_3_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943, this.camera_AF673C18_BE82_F9B0_41AA_BBA2AFFBEF0A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_1_HS_3_0.png",
      "width": 322,
      "class": "ImageResourceLevel",
      "height": 327
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.33,
   "yaw": -0.85
  }
 ],
 "id": "overlay_A4A048F5_B6CB_63D7_41E2_CADAF7431EB9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.75,
   "yaw": -83.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40, this.camera_ACA3CC5A_BE82_F9B3_41C0_E3EC7C2AAF4D); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7C1FDD_B74F_5DD4_41C8_7ACCC1FC810B",
   "pitch": -30.67,
   "hfov": 15.75,
   "yaw": -83.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6A7899D_B28C_2E05_41E4_2CD66509294C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.89,
   "yaw": 70.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA, this.camera_AFFFC8B7_BE82_FAF1_41E3_6EA348D77731); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7A4FE6_B74F_5DF5_41D5_9B76628152CE",
   "pitch": -36.01,
   "hfov": 19.89,
   "yaw": 70.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6769466_B38C_6607_41B2_7DAC595DA138",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.1,
   "yaw": 75.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B, this.camera_AF0CF8C0_BE82_FA8F_41BC_50B206F89646); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF789FE6_B74F_5DF5_41D8_D34F8413D153",
   "pitch": -24.13,
   "hfov": 6.1,
   "yaw": 75.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_848EA393_B73F_6653_41C1_9494860D7408",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.74,
   "yaw": 93.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A, this.camera_ADA50A15_BE82_F9B1_41C8_A74210DE7E4D); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 29.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_1_HS_0_0.png",
      "width": 985,
      "class": "ImageResourceLevel",
      "height": 1072
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.03,
   "yaw": 93.27
  }
 ],
 "id": "overlay_A111A483_B293_E6FD_41E0_493A02B80FB7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.13,
   "yaw": -164.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F, this.camera_AD867A07_BE82_F991_41DD_F0751B3218BA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7CFFDB_B74F_5DDC_41C0_B63104966512",
   "pitch": -44.48,
   "hfov": 19.13,
   "yaw": -164.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6D36010_B294_FE1A_41C2_787255E488AB",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.89,
   "yaw": 10.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40, this.camera_AD8809FE_BE82_FA70_41DC_100E2D8E8D21); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7C9FDB_B74F_5DDC_41E6_501165B863D8",
   "pitch": -41.98,
   "hfov": 14.89,
   "yaw": 10.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A17D4916_B295_EE07_41E1_73CF3F266C33",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.3,
   "yaw": 132.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA, this.camera_AEA9B7C7_BE82_F691_41D4_8F3ABCC55DAB); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF79EFE3_B74F_5DF3_41DF_938CF8E47B5B",
   "pitch": -50.54,
   "hfov": 15.3,
   "yaw": 132.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6539B97_B3BC_2206_41A5_D82F19533741",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.77,
   "yaw": 25.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9, this.camera_AEAED7CF_BE82_F691_41CA_C92F38363A9C); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF798FE3_B74F_5DF3_41C2_AAF05C946903",
   "pitch": -49.1,
   "hfov": 15.77,
   "yaw": 25.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A638CFC8_B3BC_E20B_41E4_7C1C4EF0DD77",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.78,
   "yaw": -55.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012, this.camera_AEB937E1_BE82_F690_41E0_CC765E7B9001); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF785FE3_B74F_5DF3_41C1_41376546EA09",
   "pitch": -48.51,
   "hfov": 15.78,
   "yaw": -55.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A789B760_B3BC_223B_41E4_5B607861AFEF",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.14,
   "yaw": 129.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4, this.camera_AEA437D8_BE82_F6B0_41C4_18A98C10F4EB); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF787FE3_B74F_5DF3_41CD_A11E67D01E34",
   "pitch": -8.84,
   "hfov": 9.14,
   "yaw": 129.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9ED4A39C_B6D4_E655_41DB_8A29F7AA08A5",
 "data": {
  "label": "Circle Generic 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.65,
   "yaw": 170.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7, this.camera_AEB387EA_BE82_F690_41B2_20828D8E0FCC); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF781FE4_B74F_5DF5_41CB_62BAD2FB0B44",
   "pitch": -31.78,
   "hfov": 11.65,
   "yaw": 170.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9CDEF6CD_B6CB_AE34_41DA_8C081869FC02",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.28,
   "yaw": 155.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF67E95_B294_6205_41E6_4008DC577345, this.camera_AECC67F3_BE82_F670_41D7_747111D66D33); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF783FE4_B74F_5DF5_41D1_54D504C4A8ED",
   "pitch": -18.87,
   "hfov": 7.28,
   "yaw": 155.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E8069F2_B6CC_A5ED_41E4_CB4B70F88FB0",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.13,
   "yaw": -34.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62, this.camera_AC794708_BE82_F79F_41E3_C169DAE05235); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7F2FDE_B74F_5DD5_41DC_CBB96C9EB12C",
   "pitch": -36.03,
   "hfov": 21.13,
   "yaw": -34.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6F613F2_B2F4_221F_41C4_11EC6A5D6BC3",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.57,
   "yaw": -133.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28, this.camera_AC60A6FF_BE82_F670_41DD_1871046B8F95); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7FEFDE_B74F_5DD5_41DD_647F6D75354D",
   "pitch": -34.32,
   "hfov": 21.57,
   "yaw": -133.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A66E538A_B2F4_E20F_41BD_C6E949D03F29",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.9,
   "yaw": -64.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF619F2_B294_2E1F_41E2_371766686094, this.camera_AE9F0A99_BE82_FEB1_41D5_5F14AC5426D9); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7ACFE9_B74F_5DFC_41D9_4886DFD86B57",
   "pitch": -32.32,
   "hfov": 12.9,
   "yaw": -64.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A623A739_B37C_620D_41BA_EC1F16031DAE",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.83,
   "yaw": -127.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26, this.camera_AC5B26EE_BE82_F693_41E3_5D6DD129280C); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF796FE0_B74F_5DED_41D9_E0CF1F7A5FE2",
   "pitch": -39.43,
   "hfov": 12.83,
   "yaw": -127.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6F9F7B9_B2FC_220D_41E4_E34396F194F3",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.93,
   "yaw": 52.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E, this.camera_AC4186E4_BE82_F690_41DB_DB83FF568F51); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF790FE0_B74F_5DED_41DA_6205389C8065",
   "pitch": -37.4,
   "hfov": 17.93,
   "yaw": 52.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6EB9B77_B2FC_2205_41E0_A090AA0C43CD",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.56,
   "yaw": -95.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40, this.camera_B17BA782_BE82_F690_41E5_9A5C9C93389D); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7C2FDD_B74F_5DD4_41C3_212B80167B01",
   "pitch": -41.27,
   "hfov": 16.56,
   "yaw": -95.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A15EDDED_B28F_E605_41E3_95E1B137D21C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.41,
   "yaw": 114.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B, this.camera_B171C78A_BE82_F690_41B9_488DDE2662C7); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7CCFDD_B74F_5DD4_41AC_AC06DC212231",
   "pitch": -33.28,
   "hfov": 18.41,
   "yaw": 114.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6361CB7_B28C_2605_41D8_2365410F49EF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.16,
   "yaw": 42.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7, this.camera_AED43804_BE82_F990_41D6_81CF6AD266BC); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7A8FE9_B74F_5DFC_41B8_CDB8FAA9753A",
   "pitch": -25.05,
   "hfov": 10.16,
   "yaw": 42.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A581B76C_B294_220B_41E2_C3CF23E91DAD",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.6,
   "yaw": 25.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_1_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7AAFE9_B74F_5DFC_41B8_C9E63CD0071F",
   "pitch": -24.6,
   "hfov": 6.6,
   "yaw": 25.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A581EE63_B294_223E_41B8_ACDF70FE7F79",
 "data": {
  "label": "Arrow 06b Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.34,
   "yaw": 41.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF754FE9_B74F_5DFC_41E3_6494DDDEFB14",
   "pitch": -13.38,
   "hfov": 4.34,
   "yaw": 41.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A5FBFFD5_B294_2205_41D6_BBFDC66D6532",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.74,
   "yaw": 59.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B, this.camera_AEEE580D_BE82_F990_4194_BCF072C562F9); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF756FE9_B74F_5DFC_41C2_7236E64E1109",
   "pitch": -16.58,
   "hfov": 6.74,
   "yaw": 59.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A60710B8_B293_DE0B_41D7_6A53A84E287E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.44,
   "yaw": -143.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147, this.camera_AED857FB_BE82_F670_41CF_DB8388D59892); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF753FEA_B74F_5DFC_41E4_AF0D1BE20BE3",
   "pitch": -27.84,
   "hfov": 12.44,
   "yaw": -143.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A591AD1C_B29C_260B_41E5_1609317911D1",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.49,
   "yaw": 167.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE37E62_B294_223E_41D5_683710308D0B, this.camera_AEFA4815_BE82_F9B0_41DC_76554C0CEEE9); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF75DFEA_B74F_5DFC_41E6_05CDEC1D5DA1",
   "pitch": -31.16,
   "hfov": 8.49,
   "yaw": 167.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3CE488B_B594_1F6D_41E2_DAF2A43D9141",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.48,
   "yaw": -135.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D, this.camera_AFCA5897_BE82_FAB0_41BB_475AA310E4B2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF4CC80B_B823_D044_41E5_32F67088902C",
   "pitch": -13.8,
   "hfov": 11.48,
   "yaw": -135.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A225C117_B29C_DE05_41E0_0C4CE54E91DE",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.25,
   "yaw": -133.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4, this.camera_AFD368A7_BE82_FA90_41C8_A0E9D69C4D41); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AF4B480E_B823_D05C_41D4_82E5C0254B2A",
   "pitch": -7.95,
   "hfov": 5.25,
   "yaw": -133.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A63B2BE4_B6D5_A5F4_4193_343AED842967",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.18,
   "yaw": -83.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26, this.camera_AE369847_BE82_F990_41C5_00D996FA3FE2); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7D8FDA_B74F_5DDC_41D5_E6BB939C09BF",
   "pitch": -30.73,
   "hfov": 15.18,
   "yaw": -83.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A11A94FB_B29C_E60D_41D0_8D8502D57E81",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.06,
   "yaw": 10.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28, this.camera_AE2B5837_BE82_F9F0_41DD_E00CBB2C4CFC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_1_0.png",
      "width": 768,
      "class": "ImageResourceLevel",
      "height": 755
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.24,
   "yaw": 10.84
  }
 ],
 "id": "overlay_A1456C90_B29C_261B_41BD_F9A10C71356D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.68,
   "yaw": 92.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918, this.camera_AE38D83F_BE82_F9F0_41E2_9BFA405B6B02); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7C4FDB_B74F_5DDC_4194_F97F71340B10",
   "pitch": -43.77,
   "hfov": 18.68,
   "yaw": 92.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A11564EB_B29C_260D_41D5_6A4CE8C0A213",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.74,
   "yaw": 171.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943, this.camera_AEF5C81D_BE82_F9B0_41B6_0AFAB02B361E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7C1FDB_B74F_5DDC_41DA_434DECD30BDD",
   "pitch": 20.1,
   "hfov": 19.74,
   "yaw": 171.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2A67653_B6CF_AED3_41E6_804ACA3BFEA0",
 "data": {
  "label": "Circle Arrow 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.69,
   "yaw": -165.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A, this.camera_AE1D782E_BE82_F990_41E3_2C31290FC4ED); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7C3FDB_B74F_5DDC_4195_0A530F1BD0F7",
   "pitch": -32.61,
   "hfov": 14.69,
   "yaw": -165.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3E7C0A3_B6CC_A273_41D1_B060EF130F1E",
 "data": {
  "label": "Circle Generic 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.61,
   "yaw": -147.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688, this.camera_AE07EB39_BE82_FFF0_41D7_9AA6C2534E6E); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF711FF2_B74F_5DED_41DC_A6CEFF5ED71A",
   "pitch": -12.31,
   "hfov": 10.61,
   "yaw": -147.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A35DDE43_B694_13DD_41DA_B50490B813A5",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.16,
   "yaw": -52.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B, this.camera_AE003B32_BE82_FFF3_41E5_C85815AC2A50); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF713FF3_B74F_5DD3_41E1_2D206292FA45",
   "pitch": -4.16,
   "hfov": 7.16,
   "yaw": -52.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A34A230D_B69C_1164_41D2_523E9713FC6C",
 "data": {
  "label": "Arrow 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.67,
   "yaw": -150.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0, this.camera_AEBF6AC9_BE82_FE90_41E2_86E131E30394); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF77CFEE_B74F_5DF4_41D8_1A783C8DF525",
   "pitch": -20.06,
   "hfov": 10.67,
   "yaw": -150.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3B03E31_B594_13BD_41D3_974DC13A7193",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.99,
   "yaw": -168.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF779FEF_B74F_5DF4_41E5_9F163BAED0EC",
   "pitch": -14.08,
   "hfov": 4.99,
   "yaw": -168.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A386E8BA_B594_70AC_41E4_A461BFCF4CD8",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.15,
   "yaw": 18.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC, this.camera_AEBA6AC0_BE82_FE8F_41DF_0E763C25D767); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF77BFEF_B74F_5DF4_41E4_37AF009D8E25",
   "pitch": -11.56,
   "hfov": 10.15,
   "yaw": 18.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A39912AD_B594_10A5_41DC_4C47E8D4EB26",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.71,
   "yaw": 52.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571, this.camera_AFF2DBCA_BE82_FE90_41E5_445F89D928D6); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF76EFF0_B74F_5DEC_41B7_7DCC1450AB19",
   "pitch": -24.07,
   "hfov": 8.71,
   "yaw": 52.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ACAA9B16_B58C_3164_41D1_D1A4B60E77C1",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.71,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D, this.camera_AF01ABD1_BE82_FEB0_41C9_BC077B732836); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF76BFF0_B74F_5DEC_41BA_92444FB993BE",
   "pitch": -34.75,
   "hfov": 21.71,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3AFA20C_B58C_136B_41DF_2BF4D20F8B28",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.81,
   "yaw": 136.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF715FF0_B74F_5DEC_41DB_B02A9AA397D8",
   "pitch": -19.03,
   "hfov": 5.81,
   "yaw": 136.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F9256439_B777_625C_41E6_18134498E027",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.75,
   "yaw": -69.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9, this.camera_AC55C6F7_BE82_F671_41CF_02440CF149EB); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF78BFE4_B74F_5DF5_41E1_A10AFCD63F17",
   "pitch": -43.92,
   "hfov": 19.75,
   "yaw": -69.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A79FC131_B3BD_DE1D_41CB_6D0DB5D6FBA8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.3,
   "yaw": -78.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_1_HS_1_0.png",
      "width": 311,
      "class": "ImageResourceLevel",
      "height": 378
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.96,
   "yaw": -78.74
  }
 ],
 "id": "overlay_A6640D08_B3BC_260B_41DC_5121CDCA6EA7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.53,
   "yaw": 40.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34, this.camera_AECBDAD9_BE82_FEB0_41E4_251448881709); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7CEFDD_B74F_5DD4_41C7_695C8512549C",
   "pitch": -33.27,
   "hfov": 15.53,
   "yaw": 40.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A16BEE30_B28C_621A_41B4_A0885BB8C271",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.54,
   "yaw": 12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7C8FDD_B74F_5DD4_41C2_5E01CE7163C6",
   "pitch": -20.88,
   "hfov": 9.54,
   "yaw": 12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_ACA27E65_B6FC_DEF7_41E6_D85BF0C0F9B7",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.81,
   "yaw": -164.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7, this.camera_AC1E39C1_BE82_FA91_41D6_C8907A1E8F4A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7F8FDE_B74F_5DD5_41DE_0602D6EF1E63",
   "pitch": -38.63,
   "hfov": 14.81,
   "yaw": -164.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6C644CF_B2F5_E605_41C2_03F4FA4A3D05",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.99,
   "yaw": -136.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_1_HS_1_0.png",
      "width": 264,
      "class": "ImageResourceLevel",
      "height": 370
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.3,
   "yaw": -136.91
  }
 ],
 "id": "overlay_A11C2CBC_B2F4_660B_41C3_9754038D0D88",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.16,
   "yaw": -131.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B, this.camera_AEA43AB8_BE82_FEFF_4194_E8B027F1FF63); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCEEE63F_B295_E205_41AE_5D89FCA238C3_1_HS_0_0.png",
      "width": 536,
      "class": "ImageResourceLevel",
      "height": 738
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.25,
   "yaw": -131.83
  }
 ],
 "id": "overlay_A35C1888_B69C_3F6B_41DC_F150EEDBD9B3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.92,
   "yaw": -49.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012, this.camera_AEE5BB10_BE82_FFB0_41CF_2B608A604ABB); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7B9FE5_B74F_5DF7_41D1_EA9A0D37AD1C",
   "pitch": -26.91,
   "hfov": 13.92,
   "yaw": -49.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A639D286_B38C_2207_41E0_B4CD2BCB7DDA",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.16,
   "yaw": -56.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7BBFE5_B74F_5DF7_41D8_D0B9FD006E12",
   "pitch": -19.58,
   "hfov": 6.16,
   "yaw": -56.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_84CA4BFE_B73C_A5D5_41B3_056930E024CD",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.71,
   "yaw": -85.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F, this.camera_AF1E0BD9_BE82_FEB0_41DE_717D7ABC1767); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7E4FDF_B74F_5DD3_41E5_EA8BCE6E5E9C",
   "pitch": -35.69,
   "hfov": 16.71,
   "yaw": -85.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A12EA653_B2FC_221E_41C2_244655C0F12F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.87,
   "yaw": -85.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7E6FDF_B74F_5DD3_41E3_A2A106BAFBD0",
   "pitch": -20.61,
   "hfov": 8.87,
   "yaw": -85.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6B164AD_B2FC_6605_41C7_EEEB1ADB06D2",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.72,
   "yaw": -3.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430, this.camera_AF493BF2_BE82_FE70_41E7_CBDCB65BB32B); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7E3FDF_B74F_5DD3_41DB_B2A63AFF9005",
   "pitch": -48.19,
   "hfov": 13.72,
   "yaw": -3.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A7BA2C5E_B2FC_2607_41E1_FDAC1ECFC99D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.94,
   "yaw": 87.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_1_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -58.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2CAB8_B294_220B_41DF_773112C84D39, this.camera_AF3BFBE9_BE82_FE90_41D6_634D9C47B103); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7ECFDF_B74F_5DD3_41DD_931154E9DEBB",
   "pitch": -58.93,
   "hfov": 13.94,
   "yaw": 87.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6F966CC_B2FC_220B_41E4_05F197B134E0",
 "data": {
  "label": "Arrow 04c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.46,
   "yaw": 20.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4, this.camera_AFBF5BA3_BE82_FE91_41E2_E01C7BA6F1E7); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7D2FDA_B74F_5DDC_41AF_0C080D775621",
   "pitch": -16.12,
   "hfov": 18.46,
   "yaw": 20.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1D575FB_B294_660D_41E6_37913D75622D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.09,
   "yaw": -118.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430, this.camera_AEB6CAD1_BE82_FEB0_41C7_AB3359021BA0); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7EAFE0_B74F_5DED_41CA_347710718DD4",
   "pitch": -44.71,
   "hfov": 17.09,
   "yaw": -118.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6E80BC6_B2FC_6206_41D6_C9A2D50EB19B",
 "data": {
  "label": "Arrow 07b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10,
   "yaw": -120.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_1_HS_1_0.png",
      "width": 333,
      "class": "ImageResourceLevel",
      "height": 309
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.6,
   "yaw": -120.25
  }
 ],
 "id": "overlay_A900D003_B6F4_E233_41E0_F870378D67EA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.65,
   "yaw": -67.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -46.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFFC460_B294_263B_41D2_812D9082F47A, this.camera_AE50D857_BE82_F9B0_41C8_9E569B47D5C9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7DFFDC_B74F_5DD4_41D4_2113CD9B05E0",
   "pitch": -46.69,
   "hfov": 14.65,
   "yaw": -67.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A151E8BA_B294_EE0C_41D7_D78A106E34D6",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.04,
   "yaw": -73.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_1_HS_1_0.png",
      "width": 366,
      "class": "ImageResourceLevel",
      "height": 391
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.05,
   "yaw": -73.07
  }
 ],
 "id": "overlay_A1330E00_B2F4_65FB_41DB_A2656859E799",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.52,
   "yaw": 49.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A, this.camera_AD993724_BE82_F797_41DA_0022A8BDEA0F); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7EDFE1_B74F_5DEF_41E6_2985A329CB96",
   "pitch": 16.21,
   "hfov": 11.52,
   "yaw": 49.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A684DD2A_B28C_260F_41D9_A1A49E440FE4",
 "data": {
  "label": "Circle Generic 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.23,
   "yaw": 92.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F, this.camera_B160B771_BE82_F670_41E6_15FF5FC5A9E6); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7EEFE1_B74F_5DEF_41E3_B597A317185D",
   "pitch": -40.01,
   "hfov": 9.23,
   "yaw": 92.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A6D0D2F2_B394_621F_41C1_6AE9CCDBB52A",
 "data": {
  "label": "Arrow 05a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.41,
   "yaw": 146.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF600D5_B297_FE05_41D8_251627B380F4, this.camera_AC745712_BE82_F7B3_41DB_620FB825C82B); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_2_0.png",
      "width": 616,
      "class": "ImageResourceLevel",
      "height": 582
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.83,
   "yaw": 146.95
  }
 ],
 "id": "overlay_A710796D_B395_EE0A_41DA_0752F21353DE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.86,
   "yaw": -27.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B, this.camera_AD94472C_BE82_F797_41D9_193A9DB7C62B); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7EAFE2_B74F_5DED_41DD_265781D4AC07",
   "pitch": -40.46,
   "hfov": 16.86,
   "yaw": -27.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A712B490_B394_E61B_41A2_38730A7C0792",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.24,
   "yaw": -126.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7, this.camera_AD8F771B_BE82_F7B1_41CF_486529C14BF2); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF794FE2_B74F_5DED_41E3_C17B3E63A879",
   "pitch": -47.35,
   "hfov": 17.24,
   "yaw": -126.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A63E7C81_B3BC_66FA_41DD_AC4A0678A292",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.43,
   "yaw": -69.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_5_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF796FE2_B74F_5DED_41D9_A27CCCCF104D",
   "pitch": -30.88,
   "hfov": 14.43,
   "yaw": -69.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_90726D0E_B6DC_E235_41B5_EA8C6D07F42F",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.58,
   "yaw": -124.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF619F2_B294_2E1F_41E2_371766686094, this.camera_B165A77A_BE82_F670_41D6_C3D713C6445D); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF793FE2_B74F_5DED_41D5_A7062A79CA31",
   "pitch": -26.58,
   "hfov": 9.58,
   "yaw": -124.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_91AF2A5B_B6D5_E6D3_41E0_9AFC4D063CAF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.77,
   "yaw": -172.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF79CFE2_B74F_5DED_41E3_9DD2FB87C84E",
   "pitch": -24.18,
   "hfov": 9.77,
   "yaw": -172.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_915A78EA_B6D5_63FD_41C2_E6B76608423C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.81,
   "yaw": -116.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCEABDE6_B294_E607_41E1_88A4981F631C, this.camera_AE093B2A_BE82_FF93_41AC_6CC571D25BC8); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF718FF1_B74F_5DEC_41DB_B17B83B97B69",
   "pitch": -15.38,
   "hfov": 8.81,
   "yaw": -116.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A355CF73_B574_11BD_41E0_5D4FB1E55AEB",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.4,
   "yaw": -113.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0, this.camera_AEF33B22_BE82_FF93_41D9_125A038E882C); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF763FF1_B74F_5DEC_41E6_0F470A7FC76A",
   "pitch": -8.95,
   "hfov": 4.4,
   "yaw": -113.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ACD895B7_B574_10A5_41C0_121645A3CBB6",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.69,
   "yaw": -24.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C, this.camera_AEFCEB18_BE82_FFB0_41E1_58F90F87D2A4); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF76DFF1_B74F_5DEC_41E4_B93BE171E8F7",
   "pitch": -8.67,
   "hfov": 8.69,
   "yaw": -24.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3613C37_B574_37A5_41D8_B29C6D57DA6F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.9,
   "yaw": -147.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF2A352_B294_621F_41E3_5375F364F10B, this.camera_AE8197A4_BE82_F690_41E0_81A68DE6C051); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7B7FE5_B74F_5DF7_41D4_9CF1C38C5863",
   "pitch": -41.2,
   "hfov": 15.9,
   "yaw": -147.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A66A75AE_B3BC_2607_41E0_99495DC1CE0C",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.97,
   "yaw": 117.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40, this.camera_AE8707AC_BE82_F690_41E3_A063BD1B0A0F); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7B0FE5_B74F_5DF7_41D5_1D3A1388B0C8",
   "pitch": -47.43,
   "hfov": 23.97,
   "yaw": 117.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A66EEB8F_B3B4_2206_41D9_B472B986BFC2",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.96,
   "yaw": 31.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF96CD_B297_E205_41BC_EC93C658E758, this.camera_AE9CF7B6_BE82_F6F0_41BB_32825CE77230); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7B2FE5_B74F_5DF7_41BF_33A8A1066421",
   "pitch": -40.77,
   "hfov": 16.96,
   "yaw": 31.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A65E32F1_B3B4_E21A_41E5_162020AE7575",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.53,
   "yaw": -50.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012, this.camera_ADB33A1D_BE82_F9B1_41CE_E44DADED72CE); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7BFFE5_B74F_5DF7_41CA_4E04ABE4240E",
   "pitch": -34.12,
   "hfov": 21.53,
   "yaw": -50.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A66E5240_B3B4_227A_41D4_EFF40490AE9A",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.45,
   "yaw": 133.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_1_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA, this.camera_AE9A6A8F_BE82_FE90_41E5_8002B9C71CE5); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF78AFE6_B74F_5DF5_41E1_1A59F5F1D633",
   "pitch": -49.77,
   "hfov": 17.45,
   "yaw": 133.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A6614936_B38C_2E07_41C3_7B6F000998E3",
 "data": {
  "label": "Arrow 06a Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.11,
   "yaw": -56.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC, this.camera_ACB24963_BE82_FB90_41D9_54DA9F7D7054); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF76EFF2_B74F_5DED_41D9_0C62C11DD1AF",
   "pitch": -6.57,
   "hfov": 8.11,
   "yaw": -56.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3469FE2_B68C_10DC_41DF_6B5634CED5FB",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.06,
   "yaw": -170.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF7C56D_B294_2605_41E3_B770BFE12688, this.camera_ACC22976_BE82_FA70_41E7_B4316CCEFAED); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_1_HS_1_0.png",
      "width": 203,
      "class": "ImageResourceLevel",
      "height": 229
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.42,
   "yaw": -170.83
  }
 ],
 "id": "overlay_A327DE79_B68C_33AD_4193_D0A50D92FF3D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.56,
   "yaw": -149.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147, this.camera_ACD07985_BE82_FA91_41D6_46CC23E05F39); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF74EFEB_B74F_5DFC_41D9_AC2418FB6AA5",
   "pitch": -35.22,
   "hfov": 12.56,
   "yaw": -149.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3CA1829_B58C_1FAC_41D2_7D150963EF5A",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -134.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_1_HS_1_0.png",
      "width": 311,
      "class": "ImageResourceLevel",
      "height": 305
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.84,
   "yaw": -134.38
  }
 ],
 "id": "overlay_F74E4707_B75C_AE33_41CC_032D81451266",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.77,
   "yaw": -90.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE2538F_B294_E206_41DB_F1184638A5E0, this.camera_ACA40956_BE82_FBB0_41C8_FF1CC1BBFC34); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF764FEF_B74F_5DF4_41C4_E0047F8731C4",
   "pitch": -22.85,
   "hfov": 10.77,
   "yaw": -90.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3E15370_B58C_11BC_41E6_4C27776DF80D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.02,
   "yaw": 18.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE8535C_B294_220B_419C_97E4DBF51571, this.camera_AC940942_BE82_FB90_41E6_E6E8435A2AC4); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF766FEF_B74F_5DF4_41C4_02144011D00C",
   "pitch": -22.04,
   "hfov": 12.02,
   "yaw": 18.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ACFC9CC8_B58C_10EB_41E2_29DDE0C71B35",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.99,
   "yaw": -143.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF835AF_B294_2606_41BE_1C6360089D8D, this.camera_AC4B69DC_BE82_FAB0_41BA_BF3A07F8442A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_1_HS_0_0.png",
      "width": 479,
      "class": "ImageResourceLevel",
      "height": 471
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.34,
   "yaw": -143.79
  }
 ],
 "id": "overlay_A116EB46_B29C_6207_41E0_442B55E89DA4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.11,
   "yaw": -113.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F, this.camera_AC2DE9CB_BE82_FA90_41C0_09B0F779D842); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7DEFDA_B74F_5DDC_41E3_51440C5BECB2",
   "pitch": -49.92,
   "hfov": 8.11,
   "yaw": -113.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6EC268E_B29C_2207_41DB_EF3BE4C5AF26",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.76,
   "yaw": 84.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF67E95_B294_6205_41E6_4008DC577345, this.camera_AEC10AE1_BE82_FE90_419D_C1DE816D1401); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF774FEC_B74F_5DF4_41B2_6C794996FC43",
   "pitch": -27.97,
   "hfov": 13.76,
   "yaw": 84.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3E111D5_B594_10E5_41C5_6E273440BC6E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.97,
   "yaw": 12.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147, this.camera_AED88AE9_BE82_FE90_41D3_375B45DBFD3B); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF75FFEC_B74F_5DF4_41DC_8808E9183F69",
   "pitch": -26.32,
   "hfov": 13.97,
   "yaw": 12.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3427BAC_B594_F0AB_41E3_584E8B987CCD",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.3,
   "yaw": -140.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E, this.camera_AEDC7AF2_BE82_FE73_41A6_F3D29158DEF8); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF759FEC_B74F_5DF4_41A3_FD676450F316",
   "pitch": -18.23,
   "hfov": 15.3,
   "yaw": -140.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3FBFB39_B594_11AD_41D3_81E8CDCC1CFB",
 "data": {
  "label": "Circle Generic 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.49,
   "yaw": 9.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_3_0.png",
      "width": 281,
      "class": "ImageResourceLevel",
      "height": 273
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.78,
   "yaw": 9.34
  }
 ],
 "id": "overlay_F45FECC5_B754_A237_41E4_F91A927F2A47",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.21,
   "yaw": 100.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_4_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF745FED_B74F_5DF4_41D6_059532AB834A",
   "pitch": -23.27,
   "hfov": 9.21,
   "yaw": 100.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FE64F1A8_B757_627D_41E3_AD93A9EDCAFA",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.05,
   "yaw": 42.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C, this.camera_AC7839F6_BE82_FA70_41D4_D9F6F4A0258A); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_1_HS_0_0.png",
      "width": 269,
      "class": "ImageResourceLevel",
      "height": 297
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.31,
   "yaw": 42.93
  }
 ],
 "id": "overlay_AC08694A_B68C_31EF_41AF_C3038D9E6E8C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.08,
   "yaw": -114.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63, this.camera_AC6859ED_BE82_FA90_41C8_FDD06BD73273); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF714FF2_B74F_5DED_41E6_B112474BD33B",
   "pitch": -10.94,
   "hfov": 10.08,
   "yaw": -114.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A34189AB_B68C_10AD_41CD_E111D2202B16",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.75,
   "yaw": -158.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7, this.camera_AF3AB8D8_BE82_FAB0_41B5_F3B416805ED3); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7A7FE7_B74F_5DF3_41C5_64C9538D20D3",
   "pitch": -42.71,
   "hfov": 20.75,
   "yaw": -158.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6DC1EB1_B374_221D_41DE_D83EFBFFB4E6",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.74,
   "yaw": 108.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4, this.camera_AF1B78C8_BE82_FA9F_41E6_443B020E58DE); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7A0FE8_B74F_5DFD_41DD_CCC33962C132",
   "pitch": -36.21,
   "hfov": 15.74,
   "yaw": 108.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A7563243_B374_227D_41C1_948A1F8F4998",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.49,
   "yaw": -157.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA, this.camera_AF2AE8CF_BE82_FA90_41B8_B7D1684D9B83); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7A2FE8_B74F_5DFD_41E1_58E15653049D",
   "pitch": -27.46,
   "hfov": 11.49,
   "yaw": -157.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8FA0D115_B74B_6254_41E5_98CB9C7406C4",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6,
   "yaw": -160.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9C740890_B85A_9775_41D8_38EC6E1A6C1C",
   "pitch": 7.57,
   "hfov": 6,
   "yaw": -160.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3C42F48_B856_69D5_41DF_8253C2CD632F",
 "data": {
  "label": "Circle Arrow 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.66,
   "yaw": 71.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCEDA408_B294_660B_41D2_CCAFD434536C, this.camera_ACE03992_BE82_FAB0_41C5_DBB1A76E610D); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF710FF1_B74F_5DEC_41E1_FAF1CC1A0575",
   "pitch": -22.55,
   "hfov": 9.66,
   "yaw": 71.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_AEF6F510_B58C_117B_41D8_422DB0D5A80D",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.41,
   "yaw": 36.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFCE91F_B294_6E06_41E4_BEB998639147, this.camera_ACFFA9A7_BE82_FA91_41E1_8DC728DA63CD); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_1_HS_1_0.png",
      "width": 344,
      "class": "ImageResourceLevel",
      "height": 350
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.86,
   "yaw": 36.75
  }
 ],
 "id": "overlay_AC6E0ACB_B58C_30EC_41E2_41132314EFCA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.96,
   "yaw": -18.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_1_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273, this.camera_AC0E69B6_BE82_FAF3_41BB_9C50A1C4FFD1); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF71DFF1_B74F_5DEC_41E1_9DDDFE74CFF2",
   "pitch": -21.7,
   "hfov": 13.96,
   "yaw": -18.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_AC95861D_B58C_1365_41E3_7692D9258B2E",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.07,
   "yaw": -107.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918, this.camera_AEEFCB09_BE82_FF90_41E6_FFE92BEBAA0B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7D8FDC_B74F_5DD4_41E6_CBE133A7A66F",
   "pitch": -44.63,
   "hfov": 11.07,
   "yaw": -107.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A157E29E_B294_2207_41DB_A8AFF0017D7B",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.86,
   "yaw": 154.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A, this.camera_AED3EAFA_BE82_FE70_41D8_59BD74710E4A); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7C5FDC_B74F_5DD4_41E4_3449DE075213",
   "pitch": -39.91,
   "hfov": 18.86,
   "yaw": 154.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A7E706F3_B294_621D_41E5_19D2605D803E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.21,
   "yaw": 73.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34, this.camera_AEE8FB01_BE82_FF90_41E7_7C41A24DB49E); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7C7FDD_B74F_5DD4_41B4_62B14EA65A6D",
   "pitch": -38.63,
   "hfov": 19.21,
   "yaw": 73.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A7515888_B294_2E0B_41E6_514DE0AF929D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.02,
   "yaw": -27.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4, this.camera_AE7AF868_BE82_F990_41DF_9B8F2570B5A2); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF75EFEA_B74F_5DFC_41E5_70618926986C",
   "pitch": -32.86,
   "hfov": 20.02,
   "yaw": -27.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3F57B2F_B58C_31A5_41B1_C3B0D323E499",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.17,
   "yaw": 61.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF67E95_B294_6205_41E6_4008DC577345, this.camera_AE6CF860_BE82_F990_41B4_DA15C3842128); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF75BFEA_B74F_5DFC_41E0_3E7C603E7D8D",
   "pitch": -27.68,
   "hfov": 14.17,
   "yaw": 61.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3ACC614_B58C_137B_41E1_232DBC95532F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.55,
   "yaw": 61.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7, this.camera_AF881870_BE82_FA70_41DC_244B3E7F082A); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF745FEA_B74F_5DFC_41DD_2596D3D54449",
   "pitch": -15.21,
   "hfov": 6.55,
   "yaw": 61.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC5CAF7E_B58C_11A7_41D5_27EB46ACF8EF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.7,
   "yaw": 55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_3_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF746FEB_B74F_5DFC_41C5_C1125A0B2749",
   "pitch": -13.69,
   "hfov": 4.7,
   "yaw": 55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A3FB9C62_B58C_17DF_41B2_2D2AE041D46F",
 "data": {
  "label": "Arrow 06b Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.98,
   "yaw": 62.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF740FEB_B74F_5DFC_41E2_4E7EE5345F3D",
   "pitch": -9.78,
   "hfov": 2.98,
   "yaw": 62.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3DD8EFE_B58C_70A7_41B4_362FA234601A",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.09,
   "yaw": 123.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCE37E62_B294_223E_41D5_683710308D0B, this.camera_AF92287F_BE82_FA70_41E0_5FF9C0A138A1); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF74DFEB_B74F_5DFC_41E2_619479AC4DA4",
   "pitch": -32.12,
   "hfov": 8.09,
   "yaw": 123.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3D22D14_B594_117B_41E6_760EE19E43F8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.06,
   "yaw": -81.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D, this.camera_AF858877_BE82_FA70_41A5_1C688589DF98); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_6_0.png",
      "width": 434,
      "class": "ImageResourceLevel",
      "height": 476
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69,
   "yaw": -81.16
  }
 ],
 "id": "overlay_8B6BE10B_B75C_E233_41D1_BA093F4471F8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.67,
   "yaw": 59.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F, this.camera_AFDA4BB1_BE82_FEF0_41CC_1233345CFA59); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_1_HS_0_0.png",
      "width": 810,
      "class": "ImageResourceLevel",
      "height": 967
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.17,
   "yaw": 59.91
  }
 ],
 "id": "overlay_A15A77A4_B28C_223B_41D4_961EBEF9520D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.07,
   "yaw": -26.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7, this.camera_AFE36BC2_BE82_FE90_41E4_F1E41D58409C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7F4FDD_B74F_5DD4_41E0_5C1C7B315E62",
   "pitch": -32.26,
   "hfov": 16.07,
   "yaw": -26.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1426398_B28C_220B_41CF_5CB6C0F48471",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.43,
   "yaw": -66.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7F6FDE_B74F_5DD5_41D3_73073CD96C3A",
   "pitch": -23.48,
   "hfov": 17.43,
   "yaw": -66.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1539037_B2F3_FE05_41D2_2E8B1531C992",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.73,
   "yaw": -23.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F, this.camera_ADC49A25_BE82_F990_41E6_8124521AEBEB); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF799FE1_B74F_5DEF_41DF_A9781728FEFF",
   "pitch": 13.17,
   "hfov": 11.73,
   "yaw": -23.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6E6238D_B28C_220A_41E3_B57DEA725058",
 "data": {
  "label": "Circle Generic 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.41,
   "yaw": 0.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA, this.camera_ADE23A35_BE82_F9F0_41DD_646FAA54F6E9); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EF7E0FE1_B74F_5DEF_41C8_A25E23FD1B4C",
   "pitch": -43.75,
   "hfov": 5.41,
   "yaw": 0.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A6CDE92C_B28C_2E0A_4194_F30F37CAF4C8",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Montserrat",
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "left": 0,
 "width": 239,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "textShadowOpacity": 1,
 "text": "360°",
 "top": 5,
 "textShadowHorizontalLength": 0,
 "propagateClick": false,
 "height": 67,
 "textShadowVerticalLength": 0,
 "minWidth": 1,
 "fontSize": 54,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Label",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Montserrat",
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 0,
 "width": 271,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "textShadowOpacity": 1,
 "text": "Casa 8 Condominio La Milla",
 "minHeight": 1,
 "textShadowHorizontalLength": 0,
 "propagateClick": false,
 "bottom": 0,
 "height": 31,
 "textShadowVerticalLength": 0,
 "minWidth": 1,
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Label",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "width": 450,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "text": "ΣΧ Studio",
 "top": "0%",
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "fontSize": 31,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Label",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Label Company Name"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 10,
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "logo"
 }
},
{
 "children": [
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 15,
 "right": "0%",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": true,
 "overflow": "scroll",
 "height": 60,
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "width": 44,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "width": 44,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "width": 44,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "width": 44,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "width": 44,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "width": 44,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "width": 44,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "cursor": "hand"
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowSpread": 1,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "right": "15%",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowSpread": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "layout": "absolute",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowSpread": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "right": "15%",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowSpread": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "layout": "absolute",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowSpread": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowSpread": 1,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "right": "15%",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFFC460_B294_263B_41D2_812D9082F47A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7D2FDC_B74F_5DD4_41E1_DC8F0ECD6612",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF7B4FE6_B74F_5DF5_41E4_F70E69EB795B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7B3FE6_B74F_5DF5_41B5_75D4A3D4F706",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF7BDFE7_B74F_5DF3_41CC_6219851F394C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF7BEFE7_B74F_5DF3_41E4_58D517FE9F2B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7BBFE7_B74F_5DF3_41E2_690E25D5FCDC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_1_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7A5FE7_B74F_5DF3_41E5_5D27BD7D398B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_9C72088F_B85A_976A_41B2_73208465234D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF0FBB_B294_220D_41B6_1C937BDFAFA7_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_9C75888F_B85A_976A_41C5_C5FBAEE59C94",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_EF71DFF3_B74F_5DD3_41D6_2AD242514B3D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF7CBA0_B294_223B_41CA_0E9854EF527B_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF71EFF3_B74F_5DD3_41C7_91B38CECCEA9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCEDA408_B294_660B_41D2_CCAFD434536C_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF71EFF1_B74F_5DEC_41C3_D739530C0251",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2B585_B294_E6FA_41DC_AA97BA80F430_1_HS_1_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_EF7E8FE0_B74F_5DED_41E4_D11BA96F0A92",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF763FEF_B74F_5DF4_41E4_998D0550FE82",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE8535C_B294_220B_419C_97E4DBF51571_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF76CFF0_B74F_5DEC_41D0_862476A6D875",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF74AFEE_B74F_5DF4_41DC_6014F6304C36",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF774FEE_B74F_5DF4_41D0_100CD2B0DBEC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF771FEE_B74F_5DF4_41BF_BEA81573A861",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE2538F_B294_E206_41DB_F1184638A5E0_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_EF772FEE_B74F_5DF4_41D4_6FA80A227FD5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7D5FDA_B74F_5DDC_41A8_0D68074C06EA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7D7FDA_B74F_5DDC_41C2_2D321A161855",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF25FBC_B294_220B_41E5_DA9B0A96D7C4_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF7D0FDA_B74F_5DDC_41E1_958D850EC6AA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF747FED_B74F_5DF4_4196_F3E62E6C5D37",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF743FED_B74F_5DF4_41E1_F3B084564D18",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF74DFED_B74F_5DF4_41B6_0C0047A5BAAC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF6F889_B294_2E0D_41B4_0D3863625B6E_1_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF74EFED_B74F_5DF4_4194_F5F80A8B45A8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF78CFE4_B74F_5DF5_41DB_72507EDE25BA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE17D72_B294_661F_41E1_DBC1AE9C72C9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF789FE4_B74F_5DF5_419C_2921CB35C5DD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF79DFE1_B74F_5DEF_41D3_631D30AD7843",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC84D7_B294_2605_41C2_11E4DF9D718E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF79FFE1_B74F_5DEF_419A_1FCC32ABB1CB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF62DFD9_B74F_5DDC_41D8_82EFD567B5B9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF62FFD9_B74F_5DDC_41D4_E08BC3E532CB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF835AF_B294_2606_41BE_1C6360089D8D_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF628FDA_B74F_5DDC_41E4_008EAFE5FB0C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF3A32F_B294_6205_41D8_F9DA5F56FF6A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7C1FDD_B74F_5DD4_41C8_7ACCC1FC810B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7A4FE6_B74F_5DF5_41D5_9B76628152CE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF600D5_B297_FE05_41D8_251627B380F4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF789FE6_B74F_5DF5_41D8_D34F8413D153",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7CFFDB_B74F_5DDC_41C0_B63104966512",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF3D9F3_B295_EE1D_41D2_D233F5B35918_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF7C9FDB_B74F_5DDC_41E6_501165B863D8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF79EFE3_B74F_5DF3_41DF_938CF8E47B5B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF798FE3_B74F_5DF3_41C2_AAF05C946903",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF785FE3_B74F_5DF3_41C1_41376546EA09",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_EF787FE3_B74F_5DF3_41CD_A11E67D01E34",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF781FE4_B74F_5DF5_41CB_62BAD2FB0B44",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2A352_B294_621F_41E3_5375F364F10B_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF783FE4_B74F_5DF5_41D1_54D504C4A8ED",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7F2FDE_B74F_5DD5_41DC_CBB96C9EB12C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFB5640_B294_227B_41D1_52A5643FAFD7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7FEFDE_B74F_5DD5_41DD_647F6D75354D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC7428_B294_660B_41C8_C5A654CF5DD4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7ACFE9_B74F_5DFC_41D9_4886DFD86B57",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF796FE0_B74F_5DED_41D9_E0CF1F7A5FE2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2CAB8_B294_220B_41DF_773112C84D39_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF790FE0_B74F_5DED_41DA_6205389C8065",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7C2FDD_B74F_5DD4_41C3_212B80167B01",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF3B79B_B294_620E_41A2_229EBC1EEA34_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7CCFDD_B74F_5DD4_41AC_AC06DC212231",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7A8FE9_B74F_5DFC_41B8_CDB8FAA9753A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF7AAFE9_B74F_5DFC_41B8_C9E63CD0071F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF754FE9_B74F_5DFC_41E3_6494DDDEFB14",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF756FE9_B74F_5DFC_41C2_7236E64E1109",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF753FEA_B74F_5DFC_41E4_AF0D1BE20BE3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF67E95_B294_6205_41E6_4008DC577345_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF75DFEA_B74F_5DFC_41E6_05CDEC1D5DA1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_AF4CC80B_B823_D044_41E5_32F67088902C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BDA2F93E_B294_6E06_41E3_B51B09C5348E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_AF4B480E_B823_D05C_41D4_82E5C0254B2A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7D8FDA_B74F_5DDC_41D5_E6BB939C09BF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7C4FDB_B74F_5DDC_4194_F97F71340B10",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_EF7C1FDB_B74F_5DDC_41DA_434DECD30BDD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF8FBC_B295_E204_41C3_188589AA1A9F_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_EF7C3FDB_B74F_5DDC_4195_0A530F1BD0F7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF711FF2_B74F_5DED_41DC_A6CEFF5ED71A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCEF60B5_B294_3E05_41E0_F51CB0334B63_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF713FF3_B74F_5DD3_41E1_2D206292FA45",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF77CFEE_B74F_5DF4_41D8_1A783C8DF525",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF779FEF_B74F_5DF4_41E5_9F163BAED0EC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCEABDE6_B294_E607_41E1_88A4981F631C_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF77BFEF_B74F_5DF4_41E4_37AF009D8E25",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF76EFF0_B74F_5DEC_41B7_7DCC1450AB19",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF76BFF0_B74F_5DEC_41BA_92444FB993BE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF60D80_B294_26FB_41DE_E1C0AC244273_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF715FF0_B74F_5DEC_41DB_B02A9AA397D8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF25788_B294_220A_41D1_4E5B48E22A2A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF78BFE4_B74F_5DF5_41E1_A10AFCD63F17",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7CEFDD_B74F_5DD4_41C7_695C8512549C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFA218C_B294_5E0B_41E4_5B5935C50A1B_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF7C8FDD_B74F_5DD4_41C2_5E01CE7163C6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2A0BA_B294_DE0F_41D5_36EBB303CE62_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7F8FDE_B74F_5DD5_41DE_0602D6EF1E63",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7B9FE5_B74F_5DF7_41D1_EA9A0D37AD1C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFF96CD_B297_E205_41BC_EC93C658E758_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF7BBFE5_B74F_5DF7_41D8_D0B9FD006E12",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7E4FDF_B74F_5DD3_41E5_EA8BCE6E5E9C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF7E6FDF_B74F_5DD3_41E3_A2A106BAFBD0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7E3FDF_B74F_5DD3_41DB_B2A63AFF9005",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFD1AC3_B294_E27D_41E6_4C7A551D4B26_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF7ECFDF_B74F_5DD3_41DD_931154E9DEBB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE199F0_B294_2E1B_41D1_E919D0034708_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7D2FDA_B74F_5DDC_41AF_0C080D775621",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC0055_B294_DE05_41C6_7E3E6849BAED_1_HS_0_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_EF7EAFE0_B74F_5DED_41CA_347710718DD4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF3EF0B_B294_220E_41BC_895572243E28_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7DFFDC_B74F_5DD4_41D4_2113CD9B05E0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_EF7EDFE1_B74F_5DEF_41E6_2985A329CB96",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_EF7EEFE1_B74F_5DEF_41E3_B597A317185D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7EAFE2_B74F_5DED_41DD_265781D4AC07",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF794FE2_B74F_5DED_41E3_C17B3E63A879",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_5_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF796FE2_B74F_5DED_41D9_A27CCCCF104D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF793FE2_B74F_5DED_41D5_A7062A79CA31",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFC1934_B294_6E1B_41DA_A5FD60B372CA_1_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF79CFE2_B74F_5DED_41E3_9DD2FB87C84E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF718FF1_B74F_5DEC_41DB_B17B83B97B69",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF763FF1_B74F_5DEC_41E6_0F470A7FC76A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF61F30_B294_621B_41DD_76A6D9DC7DAC_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF76DFF1_B74F_5DEC_41E4_B93BE171E8F7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF7B7FE5_B74F_5DF7_41D4_9CF1C38C5863",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7B0FE5_B74F_5DF7_41D5_1D3A1388B0C8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFEE1F6_B294_3E06_41C0_9333187C9012_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF7B2FE5_B74F_5DF7_41BF_33A8A1066421",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF20CCE_B294_2606_41A7_E784DE8C1E40_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7BFFE5_B74F_5DF7_41CA_4E04ABE4240E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFD6B31_B297_E21A_41C0_D0F26854C68F_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF78AFE6_B74F_5DF5_41E1_1A59F5F1D633",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BC13BA4C_B294_620B_41D6_D89C0AB0951C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF76EFF2_B74F_5DED_41D9_0C62C11DD1AF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF61459_B294_260D_41C7_E0F0F87CC2C4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF74EFEB_B74F_5DFC_41D9_AC2418FB6AA5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF764FEF_B74F_5DF4_41C4_E0047F8731C4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF638FD_B294_EE05_41E1_5893AA9BA917_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF766FEF_B74F_5DF4_41C4_02144011D00C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF3D4E4_B295_E63B_41D3_93B0B6E11943_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_EF7DEFDA_B74F_5DDC_41E3_51440C5BECB2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF774FEC_B74F_5DF4_41B2_6C794996FC43",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF75FFEC_B74F_5DF4_41DC_8808E9183F69",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_EF759FEC_B74F_5DF4_41A3_FD676450F316",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCE37E62_B294_223E_41D5_683710308D0B_1_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF745FED_B74F_5DF4_41D6_059532AB834A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF7C56D_B294_2605_41E3_B770BFE12688_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF714FF2_B74F_5DED_41E6_B112474BD33B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7A7FE7_B74F_5DF3_41C5_64C9538D20D3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7A0FE8_B74F_5DFD_41DD_CCC33962C132",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7A2FE8_B74F_5DFD_41E1_58E15653049D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF619F2_B294_2E1F_41E2_371766686094_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_9C740890_B85A_9775_41D8_38EC6E1A6C1C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF710FF1_B74F_5DEC_41E1_FAF1CC1A0575",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF658EA_B294_2E0E_41E1_701FBB402D3D_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF71DFF1_B74F_5DEC_41E1_9DDDFE74CFF2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF7D8FDC_B74F_5DD4_41E6_CBE133A7A66F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7C5FDC_B74F_5DD4_41E4_3449DE075213",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFB78C8_B294_2E0B_41C7_1C8AC8788A40_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7C7FDD_B74F_5DD4_41B4_62B14EA65A6D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF75EFEA_B74F_5DFC_41E5_70618926986C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF75BFEA_B74F_5DFC_41E0_3E7C603E7D8D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF745FEA_B74F_5DFC_41DD_2596D3D54449",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_3_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_EF746FEB_B74F_5DFC_41C5_C1125A0B2749",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EF740FEB_B74F_5DFC_41E2_4E7EE5345F3D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCFCE91F_B294_6E06_41E4_BEB998639147_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF74DFEB_B74F_5DFC_41E2_619479AC4DA4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7F4FDD_B74F_5DD4_41E0_5C1C7B315E62",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF26BCA_B294_220E_41E0_AD991AFB6F28_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_EF7F6FDE_B74F_5DD5_41D3_73073CD96C3A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_EF799FE1_B74F_5DEF_41DF_A9781728FEFF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BCF2CEE8_B294_220B_41D9_42ADB2F2619A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_EF7E0FE1_B74F_5DEF_41C8_A25E23FD1B4C",
 "rowCount": 6,
 "colCount": 4
},
{
 "popUpBackgroundColor": "#F7931E",
 "fontFamily": "Montserrat",
 "selectedPopUpBackgroundColor": "#CE6700",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "width": 200,
 "popUpBackgroundOpacity": 0,
 "backgroundOpacity": 0,
 "popUpFontColor": "#FFFFFF",
 "paddingRight": 15,
 "popUpShadow": false,
 "paddingLeft": 15,
 "borderRadius": 0,
 "minHeight": 1,
 "arrowColor": "#FFFFFF",
 "popUpPaddingTop": 10,
 "popUpShadowBlurRadius": 6,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "popUpShadowSpread": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "popUpBorderRadius": 5,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "height": "100%",
 "fontSize": "16px",
 "gap": 0,
 "popUpShadowOpacity": 0,
 "borderSize": 0,
 "arrowBeforeLabel": false,
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "label": "ESCENAS",
 "paddingTop": 0,
 "popUpPaddingLeft": 15,
 "fontStyle": "normal",
 "popUpShadowColor": "#000000",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "popUpGap": 2,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "DropDown",
 "shadow": false,
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "DropDown 2"
 }
},
{
 "popUpBackgroundColor": "#F7931E",
 "fontFamily": "Montserrat",
 "selectedPopUpBackgroundColor": "#CE6700",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "width": 200,
 "popUpBackgroundOpacity": 0,
 "backgroundOpacity": 0,
 "popUpFontColor": "#FFFFFF",
 "paddingRight": 15,
 "popUpShadow": false,
 "paddingLeft": 15,
 "borderRadius": 0,
 "minHeight": 1,
 "arrowColor": "#FFFFFF",
 "popUpPaddingTop": 10,
 "popUpShadowBlurRadius": 6,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "popUpShadowSpread": 1,
 "height": 60,
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": "16px",
 "gap": 0,
 "popUpShadowOpacity": 0,
 "borderSize": 0,
 "arrowBeforeLabel": false,
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "label": "PISCINA",
 "paddingTop": 0,
 "popUpPaddingLeft": 15,
 "fontStyle": "normal",
 "popUpShadowColor": "#000000",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "popUpGap": 2,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "class": "DropDown",
 "shadow": false,
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "DropDown 5"
 }
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 1,
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "width": 60,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 0,
 "iconHeight": 17,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "class": "Button",
 "shadow": false,
 "iconWidth": 17,
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorDirection": "vertical"
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "width": 8,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "orange line"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "overflow": "visible",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "rollOverItemLabelFontColor": "#F7931E",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemOpacity": 1,
 "itemPaddingTop": 3,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "minWidth": 1,
 "itemPaddingRight": 3,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailGrid",
 "shadow": false,
 "scrollBarColor": "#F7931E",
 "itemHeight": 160,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#F7931E",
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailHeight": 125,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 13,
 "paddingRight": 70,
 "itemThumbnailShadow": false,
 "borderRadius": 5,
 "itemLabelFontColor": "#666666",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelGap": 7,
 "itemBackgroundColorDirection": "vertical",
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadow": true,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "gap": 26,
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "itemMaxHeight": 1000,
 "horizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "itemLabelFontFamily": "Montserrat",
 "itemThumbnailBorderRadius": 0
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "class": "WebFrame",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MapViewer",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "class": "ViewerArea",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 20,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "width": "55%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "width": 8,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "orange line"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "width": "45%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 60,
 "overflow": "visible",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "photo"
 }
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "class": "ViewerArea",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 20,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 }
},
{
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.58vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.52vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.52vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.76vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.76vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.49vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.76vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.71vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "shadow": false,
 "scrollBarColor": "#F7931E",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": 180,
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#F7931E"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "fontSize": "1.96vh",
 "label": "LOREM IPSUM",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "shadow": false,
 "iconWidth": 32,
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Lorem Ipsum"
 }
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "45%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.58vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.52vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.52vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "80%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "- content"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "left",
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 }
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.03vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.49vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.95vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "class": "HTMLText",
 "shadow": false,
 "scrollBarColor": "#F7931E",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarOpacity": 0.5
}],
 "mobileMipmappingEnabled": false,
 "propagateClick": true,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "height": "100%",
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "scripts": {
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); }
 },
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "class": "Player",
 "mouseWheelEnabled": true,
 "shadow": false,
 "data": {
  "name": "Player468"
 },
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
