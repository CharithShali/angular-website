import { Component } from '@angular/core';

interface Camera {
  image: string;
  price: number;
  name: string;
  description: string[];
}

interface DVR {
  image: string;
  price: number;
  name: string;
  description: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  filter: string = 'camera';
  newCamera: Camera = {
    image: '',
    price: 0,
    name: '',
    description: [],
  };

  dvrs: DVR[] = [
    {
      image: '1.jpg',
      price: 18600,
      name: 'TD-2004NS-HL H265',
      description: [
        '6CH XVR',

        'AHD/TVI/CVI/CVBS',

        'Support (UPTO 1080P)',

        'IPC- (UPTO 3MP)',

        '1CH audio,VGA,HDMI,NO RS-485, NO alarm,NO CVBS, SATA x 1, 4 CH playback',
      ],
    },
    {
      image: '2.jpg',
      price: 21700,
      name: 'TD-2008NS-HL H265',
      description: [
        '10CH XVR',

        'AHD/TVI/CVI/CVBS',

        'Support (UPTO 1080P)',

        'IPC- (UPTO 3MP)',

        '1CH audio,VGA,HDMI,NO RS-485, NO alarm,NO CVBS, SATA x 1, 8 CH playback',
      ],
    },
    {
      image: '3.jpg',
      price: 40000,
      name: 'TD-2116NS-HL H265',
      description: [
        '16CH XVR',

        'AHD/TVI/CVI/CVBS',

        'Support (UPTO 1080P)',

        'IPC- (UPTO 3MP)',

        '1CH audio,VGA,HDMI,NO RS-485, NO alarm,CVBS, SATA x 1, 16 CH playback',
      ],
    },
    {
      image: '4.jpg',
      price: 26000,
      name: 'TD-2104TS-HC',
      description: [
        '4CH AHD/TVI/CVI DVR', 'Support (5MP Lite@10fps', '4MP Lite/1080P@15fps','1080P Lite/720P@30fps) 1CH audio, VGA', 'HDMI', 'RS-485', 'CVBS', 'NO alarm', 'SATA x 1','4 CH playback', 
      ],
    },
    {
      image: '5.jpg',
      price: 34300,
      name: 'TD-2108TS-HC',
      description: [
        '8CH TVI / CVI / AHD DVR', 'Support (5MP Lite@10fps,4MP Lite/1080P@15fps,1080P Lite/720P@30fps) 1CH audio', 'VGA', 'HDMI',  
          
          'RS-485', 'CVBS, NO alarm',  
          
          'SATA x 1,8 CH playback', 
      ],
    },
  ];

  // Create an array of camera objects
  cameras: Camera[] = [
    {
      image: '1.jpg',
      price: 7100,
      name: 'TD-7420AS2L(D/AR1) ',
      description: [
        '2MP',
        '1920 x 1080',
        '1080P real-time image, high resolution, true color ',
        'AHD / TVI / CVI /CVBS standard and lossless video output ',
        'Up to 1000 TVL resolution ',
        'CMOS progressive scan, perfectly capture the moving object',
        'Support OSD menu ',
        'High speed, long distance and real time transmission ',
        'Auto color to B / W at low illumination ',
        'Support ICR switch, true day / night, digital WDR ',
        'Support noise reduction function ',
        '10 ~ 20m IR night view distance ',
        'IP66 ingress protection ',
        'Support COC',
      ],
    },
    {
      image: '2.png',
      price: 8900,
      name: 'TD-7421AS2S(D/AR2)',
      description: [
        '2MP',
        '1920 x 1080',
        '1080P real-time image, high resolution, true color',
        'AHD / TVI / CVI /CVBS standard and lossless video output ',
        'Up to 1000 TVL resolution',
        'CMOS progressive scan, perfectly capture the moving object',
        'Support OSD menu',
        'High speed, long distance and real time transmission ',
        'Auto color to B / W at low illumination',
        'Support ICR switch, true day / night, digital WDR ',
        'Support noise reduction function',
        '20 ~ 30m IR night view distance ',
        'IP67',
        'Support COC',
      ],
    },
    {
      image: '3.jpg',
      price: 11151,
      name: 'TD-7421AS1(D/AR1)',
      description: [
        '2MP',
        '1920 x 1080',
        '1080P real time image, high resolution, true color',
        'AHD/TVI/CVI/CVBS lossless video output',
        'Up to 1000 TVL resolution',
        'CMOS progressive scan, perfectly capture the moving object',
        'Support OSD menu',
        'High speed, long distance, real time transmission',
        'Auto color to B/W at low illumination',
        'Support OSD menu',
        'Support ICR switch, true day/night',
        'Support noise reduction function ',
        '10 ~ 20m IR night view distance',
        'IP66 ingress protection',
        'Support COC',
        'Support 960H CVBS output',
      ],
    },
    {
      image: '4.png',
      price: 13900,
      name: 'TD-7421TM3 (SW/WR2)',
      description: [
        '2MP',
        '1920 x 1080',
        '1080P real-time image',
        'high resolution',
        'true color',
        'AHD / TVI / CVI lossless HD video output',
        'Support 960H CVBS output',
        'Up to 800 TVL resolution',
        'CMOS progressive scan',
        'perfectly capturing the moving object',
        'Support OSD menu',
        'High speed',
        'long distance and real time transmission',
        '24/7 full color imaging',
        'LED can be turned on or off automatically',
        'Support noise reduction function',
        '20 ~ 30m LED distance',
        'IP67',
        'Support COC',
      ],
    },
    {
      image: '5.jpg',
      price: 12200,
      name: 'TD-7524TM3 ',
      description: [
        '2MP',
        '1920 x 1080',
        'Support 960H CVBS output',
        'Up to 800 TVL resolution',
        'CMOS progressive scan, perfectly capture the moving object',
        'Support OSD menu',
        'High speed, long distance and real time transmission',
        '24/7 full color imaging',
        'LED can be turned on or off automatically',
        'Support noise reduction function',
        '20 ~ 30m LED distance',
        'IP67',
        'Support COC',
      ],
    },
    {
      image: '6.jpg',
      price: 9300.0,
      name: 'TD-7524AE2L(D/IR1 ',
      description: [
        '2MP',
        '1920 x 1080',
        '1080P real-time image, high resolution, true color',
        'AHD / TVI / CVI /CVBS standard and lossless video output',
        'Up to 1000 TVL resolution',
        'CMOS progressive scan',
        'perfectly capture the moving object',
        'Support OSD menu',
        'High speed, long distance and real time transmission',
        'Auto color to B / W at low illuminatio',
        'Support ICR switch',
        'true day / night, digital WD',
        'Support noise reduction function',
        '10 ~ 20m IR night view distance',
        'IP66 ingress protection',
        'Support COC',
      ],
    },
    {
      image: '7.png',
      price: 9600,
      name: 'TD-7422AS2(D/AR3) ',
      description: [
        '2MP',
        '1920 x 1080',
        '1080P real-time image, high resolution, true color',

        'AHD / TVI / CVI /CVBS standard and lossless video output',

        'Up to 1000 TVL resolution',

        'CMOS progressive scan, perfectly capture the moving object',

        'Support OSD menu',

        'High speed, long distance and real time transmission',

        'Auto color to B / W at low illumination',

        'Support ICR switch, true day / night, digital WDR',

        'Support noise reduction function',

        '30 ~ 50m IR night view distance',
        'IP67',
        'Support COC',
      ],
    },
    {
      image: '8.png',
      price: 8316,
      name: 'TD7520AS2S(D/AR1)',
      description: [
        '2MP',
        '1920 x 1080',

        '1080P real-time image, high resolution, true color',

        'AHD / TVI / CVI /CVBS standard and lossless video output',

        'Up to 1000 TVL resolution',

        'CMOS progressive scan, perfectly capture the moving object',

        'Support OSD menu',

        'High speed, long distance and real time transmission',

        'Auto color to B / W at low illumination',

        'Support ICR switch, true day / night, digital WDR',

        'Support noise reduction function',

        '10 ~ 20m IR night view distance',

        'Support COC',
      ],
    },
    {
      image: '9.jpg',
      price: 12800,
      name: 'TD-7451AS(D/AR1)',
      description: [
        '5MP real-time image, high resolution, true color',

        'AHD/TVI/CVI standard and lossless video output',

        'Up to 1400 TVL resolution',

        'CMOS',
        'progressive scan, perfectly capture the moving object',

        'Support OSD menu',

        'High speed, long distance and real time transmission',

        'Auto color to B/W at low illumination',

        'Support ICR switch, true day/night',

        '10 ~ 20m IR night view distance',

        'IP66 ingress protection',

        'Support COC',
      ],
    },
  ];

  updateKeyword(newKeyword: string): void {
    this.filter = newKeyword;
  }
  openModel(camera: Camera) {
    this.newCamera = camera;
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
}
