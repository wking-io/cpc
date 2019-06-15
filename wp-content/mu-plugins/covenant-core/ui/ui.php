<?php 

function ui_logo( $opts = array() ) {
  $classes = array(
    'dark'        => array(
      'dark'      => 'fill-black',
      'med-dark'  => 'fill-primary-dark',
      'med-light' => 'fill-primary-med',
      'light'     => 'fill-primary',
    ),
    'light'       => array(
      'dark'      => 'fill-white',
      'med-dark'  => 'fill-white',
      'med-light' => 'fill-white',
      'light'     => 'fill-white',
    ),
  );
  $default = array(
    'type'   => 'horizontal',
    'is_light'    => false,
  );
  $options = wp_parse_args( $opts, $default );
  $color = $options['is_light'] ? 'light' : 'dark';

  ob_start();

  if ( 'condensed' === $options['type'] ) : ?>

    <svg class="h-full w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1626.29 465.28">
      <defs><style>.cls-1{fill:#03293b;}.cls-2{fill:#436979;}.cls-3{fill:#5ba5bf;}.cls-4{fill:#64929d;}</style></defs>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="284.3 124.91 284.3 219.75 355.44 219.75 284.3 124.91"/>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="96.93 374.75 164.84 465.29 164.84 245.54 96.93 245.54 96.93 374.75"/>
      <polygon class="logo-fill--icon logo-fill--med-dark <?php echo $classes[$color]['med-dark']; ?>" points="284.3 245.54 284.3 340.38 355.44 245.54 284.3 245.54"/>
      <rect class="logo-fill--icon logo-fill--med-dark <?php echo $classes[$color]['med-dark']; ?>" x="96.93" y="116.32" width="67.91" height="103.43"/>
      <polygon class="logo-fill--icon logo-fill--med-light <?php echo $classes[$color]['med-light']; ?>" points="190.63 245.54 190.63 465.29 258.51 374.78 258.51 245.54 190.63 245.54"/>
      <polygon class="logo-fill--icon logo-fill--med-light <?php echo $classes[$color]['med-light']; ?>" points="164.84 90.53 164.84 0 96.93 90.53 164.84 90.53"/>
      <polygon class="logo-fill--icon logo-fill--med-light <?php echo $classes[$color]['med-light']; ?>" points="71.13 340.38 71.13 245.54 0 245.54 71.13 340.38"/>
      <rect class="logo-fill--icon logo-fill--light <?php echo $classes[$color]['light']; ?>" x="190.63" y="116.32" width="67.88" height="103.43"/>
      <polygon class="logo-fill--icon logo-fill--light <?php echo $classes[$color]['light']; ?>" points="190.63 0 190.63 90.53 258.51 90.53 258.51 90.5 190.63 0"/>
      <polygon class="logo-fill--icon logo-fill--light <?php echo $classes[$color]['light']; ?>" points="71.13 219.75 71.13 124.91 0 219.75 71.13 219.75"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M529.38,183.16c-15.18,0-26.7-12.09-26.7-28s11.52-27.69,26.7-27.69c8.57,0,18,5.06,24.45,12.93l14.89-17.84c-9.84-10.4-25.15-16.86-39.76-16.86-30.07,0-52.7,21.35-52.7,49.74,0,28.94,22.06,50.58,51.71,50.58,14.62,0,30.35-7.17,40.89-18.27l-15-16.15C546.94,178.66,537.53,183.16,529.38,183.16Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M627.88,105.74c-30.49,0-53.25,21.21-53.25,49.88s22.76,50.44,53.25,50.44,53.26-21.64,53.26-50.44C681.14,127.09,658.37,105.74,627.88,105.74Zm.28,78.4c-14.61,0-27.12-12.36-27.12-28.38s12.37-28.11,27.12-28.11,26.56,12.09,26.56,28.11S642.92,184.14,628.16,184.14Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="746.2 204.94 784.7 106.44 758.28 106.44 733.55 177.68 708.97 106.44 681.28 106.44 719.5 204.94 746.2 204.94"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="873.09 184.42 819.7 184.42 819.7 165.87 866.63 165.87 866.63 145.36 819.7 145.36 819.7 126.95 871.69 126.95 871.69 106.44 793.98 106.44 793.98 204.94 873.09 204.94 873.09 184.42"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="912.86 145.92 957.55 204.94 980.03 204.94 980.03 106.44 956.14 106.44 956.14 165.73 911.46 106.44 888.83 106.44 888.83 204.94 912.86 204.94 912.86 145.92"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M1022.33,187.51h42.57l6.75,17.43h27.4l-41.31-98.5h-26.42L989,204.94h26.41Zm21.5-54.8,13.49,35.13h-27.26Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1131.94 145.92 1176.62 204.94 1199.1 204.94 1199.1 106.44 1175.21 106.44 1175.21 165.73 1130.53 106.44 1107.91 106.44 1107.91 204.94 1131.94 204.94 1131.94 145.92"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1297.05 106.44 1212.6 106.44 1212.6 127.66 1241.83 127.66 1241.83 204.94 1267.54 204.94 1267.54 127.66 1297.05 127.66 1297.05 106.44"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M508.3,325.61h17.56c25.16,0,39.63-13.49,39.63-36.67,0-21.93-14.47-34.57-39.63-34.57H482.59v98.5H508.3Zm0-50.73h16.3c10.4,0,16.44,5.2,16.44,14.9,0,10-6,15.31-16.44,15.31H508.3Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M666.24,288.94c0-21.93-14.89-34.57-41-34.57H581v98.5h25.72V325.61h18.54c.28,0,.42,0,.57-.14l14.33,27.4h29.08l-20.51-32.32C660.06,314.79,666.24,304,666.24,288.94Zm-40.89,16.15H606.67V274.88h18.68c10.4,0,16.44,5.2,16.44,14.9C641.79,299.75,635.75,305.09,625.35,305.09Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="764.61 332.35 711.22 332.35 711.22 313.81 758.15 313.81 758.15 293.29 711.22 293.29 711.22 274.88 763.21 274.88 763.21 254.37 685.5 254.37 685.5 352.87 764.61 352.87 764.61 332.35"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M831.08,324.77c0,5.19-4.78,8-12.37,8-10.25,0-25.57-6.18-35.69-14.89l-10,20.09c11.8,9.7,28.94,15.74,45.38,15.74,21.92,0,39.63-10.26,39.63-30.35,0-35.41-51.85-26.13-51.85-42.43,0-4.5,4.07-6.75,10.25-6.75,8.15,0,21.36,4.64,31.76,10.54l9.7-20.38c-10.26-6.6-24.87-11.1-39.35-11.1-23.74,0-39.34,11.67-39.34,30.07C779.23,318.16,831.08,308,831.08,324.77Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M954.46,279.24c0-15.18-14.2-24.87-36.54-24.87H871.13v98.5h48.62c23.18,0,37.94-10.54,37.94-27.4,0-12.65-7.73-22.34-20.24-24.87C947.85,297.79,954.46,289.5,954.46,279.24Zm-57.76-4.78h19.82c7,0,11.52,3.37,11.52,9.28,0,6.18-4.5,9.83-11.52,9.83H896.7Zm19.82,58.46H896.7v-20.8h19.82c9,0,14.61,3.93,14.61,10.12C931.13,329,925.51,332.92,916.52,332.92Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1026.26 352.87 1026.26 321.39 1061.81 254.37 1036.1 254.37 1013.34 296.66 990.01 254.37 964.3 254.37 1000.55 322.1 1000.55 352.87 1026.26 352.87"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1073.34 275.58 1102.57 275.58 1102.57 352.87 1128.28 352.87 1128.28 275.58 1157.79 275.58 1157.79 254.37 1073.34 254.37 1073.34 275.58"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1199.53 313.81 1246.46 313.81 1246.46 293.29 1199.53 293.29 1199.53 274.88 1251.52 274.88 1251.52 254.37 1173.81 254.37 1173.81 352.87 1252.92 352.87 1252.92 332.35 1199.53 332.35 1199.53 313.81"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M1356.77,288.94c0-21.93-14.9-34.57-41-34.57h-44.26v98.5h25.71V325.61h18.55c.28,0,.42,0,.56-.14l14.33,27.4h29.09l-20.52-32.32C1350.59,314.79,1356.77,304,1356.77,288.94Zm-40.89,16.15h-18.69V274.88h18.69c10.4,0,16.44,5.2,16.44,14.9C1332.32,299.75,1326.28,305.09,1315.88,305.09Z"/>
      <rect class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" x="1376.03" y="254.37" width="25.71" height="98.5"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M1455.7,254.37l-42.3,98.5h26.42l6.89-17.43h42.57l6.75,17.43h27.4l-41.31-98.5Zm-1.27,61.4,13.77-35.12,13.49,35.12Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1602.4 254.37 1602.4 313.67 1557.72 254.37 1535.1 254.37 1535.1 352.87 1559.12 352.87 1559.12 293.85 1603.81 352.87 1626.29 352.87 1626.29 254.37 1602.4 254.37"/>
    </svg>

  <?php elseif( 'vertical' === $options['type'] ) : ?>

    <svg class="h-full w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 629.98 791.25">      
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="433.8 138.28 512.54 243.27 433.8 243.27 433.8 138.28"/>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="512.54 271.82 433.8 376.81 433.8 271.82 512.54 271.82"/>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="405.24 271.82 405.24 414.9 330.09 515.09 330.09 271.82 405.24 271.82"/>
      <rect class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" x="330.09" y="128.77" width="75.15" height="114.5"/>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="405.24 100.19 405.24 100.22 330.09 100.22 330.09 0 405.24 100.19"/>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="301.54 271.82 301.54 515.09 226.36 414.87 226.36 271.82 301.54 271.82"/>
      <rect class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" x="226.36" y="128.77" width="75.18" height="114.5"/>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="301.54 0 301.54 100.22 226.36 100.22 301.54 0"/>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="197.81 271.82 197.81 376.81 119.06 271.82 197.81 271.82"/>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="197.81 138.28 197.81 243.27 119.06 243.27 197.81 138.28"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M140.57,582.53l-8.21,9.83c-3.56-4.33-8.75-7.12-13.47-7.12-8.36,0-14.71,6.58-14.71,15.25s6.35,15.41,14.71,15.41c4.49,0,9.68-2.48,13.47-6.35l8.28,8.9c-5.8,6.12-14.47,10.06-22.52,10.06-16.33,0-28.49-11.92-28.49-27.86,0-15.64,12.46-27.41,29-27.41A31.18,31.18,0,0,1,140.57,582.53Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M202.49,600.72c0,15.87-12.54,27.79-29.34,27.79s-29.34-11.92-29.34-27.79,12.54-27.48,29.34-27.48S202.49,585,202.49,600.72Zm-44.12.08c0,8.83,6.89,15.64,14.94,15.64s14.63-6.81,14.63-15.64-6.51-15.48-14.63-15.48A15.12,15.12,0,0,0,158.37,600.8Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M238.32,627.89h-14.7l-21.06-54.26h15.25l13.55,39.25L245,573.63h14.55Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M307.45,584.93H278.81v10.14h25.85v11.3H278.81v10.22h29.41v11.3H264.64V573.63h42.81Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M367.12,627.89H354.74l-24.62-32.51v32.51H316.89V573.63h12.46L354,606.3V573.63h13.16Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M413.87,618.3H390.42l-3.79,9.59H372.07l23.3-54.26h14.56l22.75,54.26H417.59Zm-4.18-10.84-7.43-19.35-7.58,19.35Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M487.79,627.89H475.41l-24.62-32.51v32.51H437.56V573.63H450l24.61,32.67V573.63h13.16Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M541.75,585.32H525.49v42.57H511.32V585.32h-16.1V573.63h46.53Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M45.67,674.16c0,12.77-8,20.2-21.83,20.2H14.17v15H0V655.11H23.84C37.7,655.11,45.67,662.08,45.67,674.16Zm-31.5-7.74v16.64h9c5.73,0,9.06-2.94,9.06-8.44,0-5.34-3.33-8.2-9.06-8.2Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M86.77,709.38l-7.89-15.1c-.08.08-.16.08-.31.08H68.35v15H54.18V655.11H78.57c14.39,0,22.6,7,22.6,19,0,8.28-3.41,14.24-9.68,17.41l11.3,17.81Zm-8.13-26.32c5.73,0,9.06-2.94,9.06-8.44,0-5.34-3.33-8.2-9.06-8.2H68.35v16.64Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M154.58,666.42H125.94v10.14h25.85v11.3H125.94v10.22h29.41v11.3H111.77V655.11h42.81Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M206.75,660.61l-5.35,11.22c-5.72-3.25-13-5.8-17.49-5.8-3.41,0-5.65,1.24-5.65,3.71,0,9,28.56,3.87,28.56,23.38,0,11.07-9.75,16.72-21.83,16.72a40.78,40.78,0,0,1-25-8.67l5.5-11.07c5.57,4.8,14,8.21,19.66,8.21,4.18,0,6.81-1.55,6.81-4.41,0-9.22-28.56-3.64-28.56-22.84,0-10.14,8.59-16.56,21.67-16.56A41.66,41.66,0,0,1,206.75,660.61Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M259.92,668.82c0,5.65-3.64,10.21-9.37,11.76a13.41,13.41,0,0,1,11.15,13.7c0,9.29-8.13,15.1-20.9,15.1H214V655.11H239.8C252.1,655.11,259.92,660.46,259.92,668.82Zm-31.81-2.64v10.53H239c3.87,0,6.35-2,6.35-5.42,0-3.25-2.48-5.11-6.35-5.11Zm0,20.75v11.46H239c5,0,8-2.17,8-5.89,0-3.4-3.09-5.57-8-5.57Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M299.47,692v17.34H285.31v-17l-20-37.32H279.5l12.85,23.3,12.54-23.3h14.17Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M371.92,666.8H355.67v42.58H341.5V666.8H325.4V655.11h46.52Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M423.55,666.42H394.91v10.14h25.85v11.3H394.91v10.22h29.42v11.3H380.74V655.11h42.81Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M467.13,709.38l-7.9-15.1c-.08.08-.15.08-.31.08H448.7v15H434.54V655.11h24.38c14.4,0,22.6,7,22.6,19,0,8.28-3.4,14.24-9.67,17.41l11.3,17.81ZM459,683.06c5.73,0,9.06-2.94,9.06-8.44,0-5.34-3.33-8.2-9.06-8.2H448.7v16.64Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M506.29,709.38H492.13V655.11h14.16Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M554.51,699.78H531.06l-3.79,9.6H512.71L536,655.11h14.56l22.76,54.27h-15.1Zm-4.18-10.84-7.43-19.35-7.58,19.35Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M630,709.38H617.6L593,676.87v32.51H579.75V655.11h12.46l24.61,32.67V655.11H630Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M192.46,744.8l-5.34,6.66A21.12,21.12,0,0,0,172,744.57a19.08,19.08,0,1,0,0,38.16,22.37,22.37,0,0,0,15.09-6.42l5.42,6a30.73,30.73,0,0,1-21,8.9c-15.87,0-28.18-12-28.18-27.56,0-15.4,12.46-27.25,28.49-27.25A29.91,29.91,0,0,1,192.46,744.8Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M250.36,790.86h-9.13V768.41H212.51v22.45h-9.13V736.68h9.13v23.53h28.72V736.68h9.13Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M310.66,768.41c0,14.17-8.9,22.84-23.53,22.84s-23.61-8.67-23.61-22.84V736.68h9.13v31.73c0,9.14,5.65,14.63,14.55,14.63s14.32-5.41,14.32-14.63V736.68h9.14Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M358.11,790.86l-9.91-16.41c-.78.08-1.63.08-2.48.08H332.87v16.33h-9.13V736.68h22c13.86,0,21.83,6.73,21.83,18.5,0,8.67-3.95,14.7-11.22,17.57l12.15,18.11Zm-12.39-24.54c8.36,0,13.16-3.56,13.16-10.91,0-7.12-4.8-10.53-13.16-10.53H332.87v21.44Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M424.29,744.8l-5.35,6.66a21.12,21.12,0,0,0-15.09-6.89,19.08,19.08,0,1,0,0,38.16,22.37,22.37,0,0,0,15.09-6.42l5.42,6a30.73,30.73,0,0,1-21,8.9c-15.87,0-28.18-12-28.18-27.56,0-15.4,12.46-27.25,28.49-27.25A30,30,0,0,1,424.29,744.8Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M482.18,790.86h-9.13V768.41H444.33v22.45H435.2V736.68h9.13v23.53h28.72V736.68h9.13Z"/>
    </svg>

  <?php else : ?>

    <svg class="h-full w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1414.09 661.59">
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="404.25 177.61 404.25 312.46 505.4 312.46 404.25 177.61"/>
      <polygon class="logo-fill--icon logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="137.82 532.87 234.38 661.59 234.38 349.13 137.82 349.13 137.82 532.87"/>
      <polygon class="logo-fill--icon logo-fill--med-dark <?php echo $classes[$color]['med-dark']; ?>" points="404.25 349.13 404.25 483.98 505.4 349.13 404.25 349.13"/>
      <rect class="logo-fill--icon logo-fill--med-dark <?php echo $classes[$color]['med-dark']; ?>" x="137.82" y="165.4" width="96.56" height="147.06"/>
      <polygon class="logo-fill--icon logo-fill--med-light <?php echo $classes[$color]['med-light']; ?>" points="271.05 349.13 271.05 661.59 367.58 532.9 367.58 349.13 271.05 349.13"/>
      <polygon class="logo-fill--icon logo-fill--med-light <?php echo $classes[$color]['med-light']; ?>" points="234.38 128.72 234.38 0 137.82 128.72 234.38 128.72"/>
      <polygon class="logo-fill--icon logo-fill--med-light <?php echo $classes[$color]['med-light']; ?>" points="101.14 483.98 101.14 349.13 0 349.13 101.14 483.98"/>
      <rect class="logo-fill--icon logo-fill--light <?php echo $classes[$color]['light']; ?>" x="271.05" y="165.4" width="96.52" height="147.06"/>
      <polygon class="logo-fill--icon logo-fill--light <?php echo $classes[$color]['light']; ?>" points="271.05 0 271.05 128.72 367.58 128.72 367.58 128.69 271.05 0"/>
      <polygon class="logo-fill--icon logo-fill--light <?php echo $classes[$color]['light']; ?>" points="101.14 312.46 101.14 177.61 0 312.46 101.14 312.46"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M638,240c-10.74,0-18.89-8.55-18.89-19.79s8.15-19.58,18.89-19.58c6.06,0,12.72,3.58,17.3,9.14l10.53-12.62a39.94,39.94,0,0,0-28.13-11.93c-21.27,0-37.28,15.11-37.28,35.19,0,20.48,15.61,35.79,36.58,35.79,10.34,0,21.48-5.07,28.93-12.92L655.34,231.8C650.47,236.77,643.81,240,638,240Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M707.73,185.18c-21.57,0-37.68,15-37.68,35.29s16.11,35.69,37.68,35.69,37.68-15.31,37.68-35.69C745.41,200.29,729.3,185.18,707.73,185.18Zm.2,55.47c-10.34,0-19.19-8.75-19.19-20.08s8.75-19.88,19.19-19.88,18.79,8.55,18.79,19.88S718.37,240.65,707.93,240.65Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="791.44 255.37 818.68 185.68 799.99 185.68 782.49 236.08 765.1 185.68 745.51 185.68 772.55 255.37 791.44 255.37"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="881.21 240.85 843.44 240.85 843.44 227.73 876.64 227.73 876.64 213.21 843.44 213.21 843.44 200.19 880.22 200.19 880.22 185.68 825.24 185.68 825.24 255.37 881.21 255.37 881.21 240.85"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="909.35 213.61 940.96 255.37 956.87 255.37 956.87 185.68 939.97 185.68 939.97 227.63 908.35 185.68 892.35 185.68 892.35 255.37 909.35 255.37 909.35 213.61"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M986.8,243h30.12l4.77,12.32h19.38l-29.22-69.68H993.16l-29.92,69.68h18.68ZM1002,204.27l9.54,24.85H992.26Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1064.34 213.61 1095.95 255.37 1111.86 255.37 1111.86 185.68 1094.96 185.68 1094.96 227.63 1063.35 185.68 1047.34 185.68 1047.34 255.37 1064.34 255.37 1064.34 213.61"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1181.15 185.68 1121.41 185.68 1121.41 200.69 1142.09 200.69 1142.09 255.37 1160.28 255.37 1160.28 200.69 1181.15 200.69 1181.15 185.68"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M623.13,340.74h12.42c17.8,0,28-9.55,28-25.95,0-15.51-10.24-24.45-28-24.45H604.94V360h18.19Zm0-35.89h11.53c7.36,0,11.63,3.68,11.63,10.54,0,7.06-4.27,10.83-11.63,10.83H623.13Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M734.87,314.79c0-15.51-10.54-24.45-29-24.45H674.53V360h18.19V340.74h13.12c.2,0,.3,0,.4-.1L716.38,360H737l-14.52-22.86C730.5,333.08,734.87,325.43,734.87,314.79Zm-28.93,11.43H692.72V304.85h13.22c7.36,0,11.63,3.68,11.63,10.54C717.57,322.45,713.3,326.22,705.94,326.22Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="804.46 345.51 766.69 345.51 766.69 332.39 799.89 332.39 799.89 317.87 766.69 317.87 766.69 304.85 803.47 304.85 803.47 290.34 748.49 290.34 748.49 360.02 804.46 360.02 804.46 345.51"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M851.49,340.14c0,3.68-3.38,5.67-8.75,5.67-7.26,0-18.09-4.38-25.25-10.54l-7.06,14.22c8.35,6.85,20.48,11.13,32.11,11.13,15.51,0,28-7.26,28-21.47,0-25-36.69-18.49-36.69-30,0-3.19,2.89-4.78,7.26-4.78,5.77,0,15.11,3.28,22.47,7.46l6.86-14.42a53.49,53.49,0,0,0-27.84-7.85c-16.8,0-27.83,8.25-27.83,21.28C814.81,335.47,851.49,328.31,851.49,340.14Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M938.78,307.93c0-10.73-10-17.59-25.85-17.59H879.82V360h34.4c16.4,0,26.84-7.45,26.84-19.38,0-8.95-5.47-15.81-14.31-17.6C934.1,321.05,938.78,315.19,938.78,307.93Zm-40.86-3.38h14c5,0,8.16,2.39,8.16,6.56,0,4.38-3.19,7-8.16,7h-14Zm14,41.36h-14V331.19h14c6.37,0,10.34,2.79,10.34,7.16C922.27,343.12,918.3,345.91,911.93,345.91Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="989.58 360.02 989.58 337.75 1014.73 290.34 996.54 290.34 980.43 320.26 963.93 290.34 945.74 290.34 971.39 338.25 971.39 360.02 989.58 360.02"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1022.89 305.35 1043.56 305.35 1043.56 360.02 1061.76 360.02 1061.76 305.35 1082.63 305.35 1082.63 290.34 1022.89 290.34 1022.89 305.35"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1112.16 332.39 1145.36 332.39 1145.36 317.87 1112.16 317.87 1112.16 304.85 1148.94 304.85 1148.94 290.34 1093.97 290.34 1093.97 360.02 1149.94 360.02 1149.94 345.51 1112.16 345.51 1112.16 332.39"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M1223.41,314.79c0-15.51-10.54-24.45-29-24.45h-31.32V360h18.2V340.74h13.12c.2,0,.3,0,.4-.1L1204.92,360h20.57L1211,337.16C1219,333.08,1223.41,325.43,1223.41,314.79Zm-28.93,11.43h-13.22V304.85h13.22c7.35,0,11.63,3.68,11.63,10.54C1206.11,322.45,1201.83,326.22,1194.48,326.22Z"/>
      <rect class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" x="1237.03" y="290.34" width="18.19" height="69.69"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M1293.4,290.34,1263.47,360h18.69L1287,347.7h30.12l4.77,12.32h19.38l-29.22-69.68Zm-.9,43.44,9.75-24.85,9.54,24.85Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1397.19 290.34 1397.19 332.29 1365.58 290.34 1349.57 290.34 1349.57 360.02 1366.57 360.02 1366.57 318.27 1398.18 360.02 1414.09 360.02 1414.09 290.34 1397.19 290.34"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M638.34,454.24a24.48,24.48,0,0,1-24.86-24.55c0-13.72,10.94-24.46,24.86-24.46a27.16,27.16,0,0,1,19.38,8.85l6.86-8.55a38.4,38.4,0,0,0-26.44-10.73c-20.58,0-36.58,15.21-36.58,35,0,20,15.8,35.39,36.18,35.39,9.84,0,19.88-4.47,26.94-11.43l-7-7.76C652.45,451.06,645.3,454.24,638.34,454.24Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="727.22 425.32 690.33 425.32 690.33 395.1 678.6 395.1 678.6 464.68 690.33 464.68 690.33 435.85 727.22 435.85 727.22 464.68 738.95 464.68 738.95 395.1 727.22 395.1 727.22 425.32"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M804.66,435.85c0,11.83-7.06,18.79-18.39,18.79s-18.69-7.06-18.69-18.79V395.09H755.85v40.76c0,18.2,11.53,29.33,30.32,29.33s30.22-11.13,30.22-29.33V395.09H804.66Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M889.46,418.85c0-15.11-10.24-23.76-28-23.76H833.2v69.59h11.73v-21h16.5c1.09,0,2.19,0,3.18-.1l12.72,21.07h13.33l-15.61-23.26C884.39,437.74,889.46,430,889.46,418.85Zm-28,14.32h-16.5V405.63h16.5c10.74,0,16.9,4.38,16.9,13.52C878.33,428.6,872.17,433.17,861.43,433.17Z"/>
      <path class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" d="M936.09,454.24a24.48,24.48,0,0,1-24.85-24.55c0-13.72,10.93-24.46,24.85-24.46a27.18,27.18,0,0,1,19.39,8.85l6.85-8.55a38.38,38.38,0,0,0-26.44-10.73c-20.58,0-36.58,15.21-36.58,35,0,20,15.81,35.39,36.18,35.39,9.85,0,19.89-4.47,26.94-11.43L955.48,446C950.21,451.06,943.05,454.24,936.09,454.24Z"/>
      <polygon class="logo-fill--text logo-fill--dark <?php echo $classes[$color]['dark']; ?>" points="1024.97 425.32 988.09 425.32 988.09 395.1 976.36 395.1 976.36 464.68 988.09 464.68 988.09 435.85 1024.97 435.85 1024.97 464.68 1036.7 464.68 1036.7 395.1 1024.97 395.1 1024.97 425.32"/>
    </svg>

  <?php endif; return ob_get_clean();
}

function ui_event( $opts = array(), $add_top = false ) {
  ob_start(); if ( ! empty( $opts ) ) : ?>
    <li class="upcoming-event-item <?php echo $add_top ? 'border-t border-b' : 'border-b'; ?> border-grey-md my-0 py-2 lg:py-3">
      <div class="flex justify-between mb-1">
        <p class="upcoming-event-item__date text-primary text-sm font-medium"><?php echo $opts['date']; ?></p>
        <p class="upcoming-event-item__time text-primary text-sm font-medium"><?php echo $opts['time']; ?></p>
      </div>
      <h4 class="font-bold"><a class="upcoming-event-item__title text-black no-underline hover:underline" href="<?php echo $opts['url']; ?>"><?php echo $opts['title']; ?></a></h4>
    </li>
  <?php endif; return ob_get_clean();
}

function ui_icon( $opts = array() ) {

  $default = array(
    'icon'   => 'mp3',
    'classes'    => 'h-full w-auto',
    'color'      => 'fill-black',
  );

  $options = wp_parse_args( $opts, $default );

  ob_start();

  if ( 'mp3' === $options['icon'] ) : ?>
    <svg class="<?php echo $options['classes']; ?>" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
      <path class="<?php echo $options['color']; ?>" d="M19.35,6a7.49,7.49,0,0,0-14-2A6,6,0,0,0,6,16H19a5,5,0,0,0,.35-10ZM17,9l-5,5L7,9h3V5h4V9Z"/>
    </svg>
  <?php elseif( 'facebook' === $options['icon'] ) : ?>
    <svg class="<?php echo $options['classes']; ?>" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.27537 6.57204H6.11039V4.49628C6.11039 3.71673 6.62706 3.53499 6.99096 3.53499C7.35403 3.53499 9.22445 3.53499 9.22445 3.53499V0.107953L6.14848 0.0959473C2.73387 0.0959473 1.9568 2.65194 1.9568 4.28763V6.57204H-0.0179443V10.1034H1.9568C1.9568 14.6354 1.9568 20.0959 1.9568 20.0959H6.11039C6.11039 20.0959 6.11039 14.5816 6.11039 10.1034H8.91313L9.27537 6.57204Z" class="<?php echo $options['color']; ?>"/>
    </svg>
  <?php elseif( 'itunes' === $options['icon'] ) : ?>
    <svg class="<?php echo $options['classes']; ?>" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.17 56.69">
      <path class="<?php echo $options['color']; ?>" d="M38.56,30.13c-.07-7.19,5.86-10.63,6.12-10.8a13.23,13.23,0,0,0-10.37-5.62c-4.41-.45-8.61,2.6-10.85,2.6s-5.7-2.53-9.36-2.47A13.88,13.88,0,0,0,2.37,21c-5,8.67-1.28,21.53,3.6,28.57,2.38,3.44,5.22,7.31,9,7.17s4.94-2.32,9.28-2.32,5.57,2.32,9.36,2.25,6.32-3.51,8.68-7a31.68,31.68,0,0,0,3.93-8.07A12.52,12.52,0,0,1,38.56,30.13Z"/>
      <path class="<?php echo $options['color']; ?>" d="M31.42,9.05a12.46,12.46,0,0,0,2.95-9A12.76,12.76,0,0,0,26,4.29c-1.84,2.13-3.44,5.52-3,8.78C26.19,13.31,29.44,11.45,31.42,9.05Z"/>
    </svg>
  <?php elseif ( 'file' === $options['icon'] ) : ?>
  <svg class="<?php echo $options['classes']; ?>" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0H2C0.9 0 0.0100002 0.855 0.0100002 1.9L0 17.1C0 18.145 0.89 19 1.99 19H14C15.1 19 16 18.145 16 17.1V5.7L10 0ZM2 17.1V1.9H9V6.65H14V17.1H2Z" class="<?php echo $options['color']; ?>" />
  </svg>
  <?php elseif ( 'clock' === $options['icon'] ) : ?>
    <svg class="<?php echo $options['classes']; ?>" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4ZM8.4 4H7.2V8.8L11.4 11.32L12 10.336L8.4 8.2V4Z" class="<?php echo $options['color']; ?>"/>
    </svg>
  <?php elseif ( 'location' === $options['icon'] ) : ?>
    <svg class="<?php echo $options['classes']; ?>" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 0C2.45929 0 0 2.504 0 5.6C0 9.8 5.5 16 5.5 16C5.5 16 11 9.8 11 5.6C11 2.504 8.54071 0 5.5 0ZM1.57143 5.6C1.57143 3.392 3.33143 1.6 5.5 1.6C7.66857 1.6 9.42857 3.392 9.42857 5.6C9.42857 7.904 7.16571 11.352 5.5 13.504C3.86571 11.368 1.57143 7.88 1.57143 5.6Z" class="<?php echo $options['color']; ?>" />
      <path d="M5.50335 7.60004C6.58819 7.60004 7.46763 6.70461 7.46763 5.60004C7.46763 4.49547 6.58819 3.60004 5.50335 3.60004C4.4185 3.60004 3.53906 4.49547 3.53906 5.60004C3.53906 6.70461 4.4185 7.60004 5.50335 7.60004Z" class="<?php echo $options['color']; ?>" />
    </svg>
  <?php elseif ( 'search' === $options['icon'] ) : ?>
    <svg class="<?php echo $options['classes']; ?>" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z" class="<?php echo $options['color']; ?>" />
    </svg>
  <?php else : ?>
    <svg class="<?php echo $options['classes']; ?>" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.27537 6.57204H6.11039V4.49628C6.11039 3.71673 6.62706 3.53499 6.99096 3.53499C7.35403 3.53499 9.22445 3.53499 9.22445 3.53499V0.107953L6.14848 0.0959473C2.73387 0.0959473 1.9568 2.65194 1.9568 4.28763V6.57204H-0.0179443V10.1034H1.9568C1.9568 14.6354 1.9568 20.0959 1.9568 20.0959H6.11039C6.11039 20.0959 6.11039 14.5816 6.11039 10.1034H8.91313L9.27537 6.57204Z" class="<?php echo $options['color']; ?>"/>
    </svg>
  <?php endif; return ob_get_clean();
}

function ui_group( $opts = array() ) {
  if ( empty( $opts['post_id'] ) ) :
    return '';
  endif;
 
  $ministry   = get_the_terms( $opts['post_id'], 'cpc_ministry' );
  $day        = get_the_terms( $opts['post_id'], 'cpc_day' );
  $group_type = get_the_terms( $opts['post_id'], 'cpc_group_type' );
  $terms      = array();

  if ( ! empty( $day ) ) :
    foreach ( $day as $val ) :
      $terms[] = $val->name;
    endforeach;
  endif;

  if ( ! empty( $ministry ) ) :
    foreach ( $ministry as $val ) :
      $terms[] = $val->name;
    endforeach;
  endif;

  if ( ! empty( $group_type ) ) :
    foreach ( $group_type as $val ) :
      $terms[] = $val->name;
    endforeach;
  endif;

  ob_start(); ?>

  <li class="border border-primary hover:border-black hover:bg-black hover:text-white mb-4">
    <a class="flex flex-col sm:flex-row justify-between p-4 md:p-6" href="<?php echo get_the_permalink( $opts['post_id'] ); ?>">
      <div class="mb-4 sm:mb-0">
        <?php if ( ! empty( $terms ) ) : ?>
          <div class="flex uppercase text-primary font-semibold text-xs sm:text-sm mb-0 sm:mb-2">
            <?php foreach ( $terms as $key => $term ) : ?>
              <?php if ( $key > 0 ) : ?>
                <p class="mx-2">-</p>
              <?php endif; ?>
              <p class=""><?php echo $term; ?></p>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
        <h1 class="leading-tight md:leading-none mb-0 text-2xl sm:text-3xl sm:text-4xl font-bold"><?php echo get_the_title( $opts['post_id'] ); ?></h1>
      </div>
      <div class="flex flex-row sm:flex-col items-end justify-between">
        <p class="font-semibold text-sm"><?php echo get_field( 'group_time', $opts['post_id'] ); ?></p>
        <p class="font-semibold text-sm"><?php echo get_field( 'group_location', $opts['post_id'] ); ?></p>
      </div>
    </a>
  </li>
    
  <?php return ob_get_clean();
}

?>