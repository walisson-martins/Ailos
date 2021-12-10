import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-line',
  templateUrl: 'progress-line.component.html',
  styleUrls: ['./progress-line.component.sass'],
})
export class ProgressLineComponent implements OnInit, OnChanges {
  progress!: number;
  steps = [
    {
      title: 'Início',
      current: true,
      completed: false,
      progress: 0,
    },
    {
      title: 'Documentos',
      current: false,
      completed: false,
      progress: 4 / 3,
    },
    {
      title: 'Dados cadsatrais',
      current: false,
      completed: false,
      progress: (4 / 3) * 2,
    },
    {
      title: 'Admissão',
      current: false,
      completed: false,
      progress: 4,
    },
  ];

  ngOnInit(): void {
    this.steps.map((item) => {
      if (item.current) this.progress = item.progress;
    });
  }

  ngOnChanges(): void {
    this.steps.map((item) => {
      if (item.current) this.progress = item.progress;
    });
  }
}
