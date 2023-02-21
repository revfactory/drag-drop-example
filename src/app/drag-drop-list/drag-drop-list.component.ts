import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.scss']
})
export class DragDropListComponent {
  bucketList = [
    '베스트셀러 작가되기',
    '마라톤 완주하기',
    '기네스 세계 기록 세우기',
    '번지점프 하기',
    '스카이다이빙하기',
    '박사학위받기',
    '남극방문하기',
    '아마존 밀림 탐험하기'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.bucketList, event.previousIndex, event.currentIndex);
  }

  todo = [
    '베스트셀러 작가되기',
    '마라톤 완주하기',
    '기네스 세계 기록 세우기',
    '번지점프 하기',
    '스카이다이빙하기',
    '박사학위받기',
    '남극방문하기',
    '아마존 밀림 탐험하기'
  ];

  done = [

  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
