import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription-oral-etape3',
  templateUrl: './inscription-oral-etape3.component.html',
  styleUrls: ['./inscription-oral-etape3.component.scss']
})
export class InscriptionOralEtape3Component {

  constructor() {}

  onDragOver(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    // Add any visual feedback for the dragover event here (e.g., highlight the drop zone).
  }

  onDrop(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    const droppedFiles = (event as DragEvent).dataTransfer?.files;
    if (droppedFiles && droppedFiles.length > 0) {
      // Handle the dropped files here (e.g., display file names).
      for (let i = 0; i < droppedFiles.length; i++) {
        console.log('Dropped file:', droppedFiles[i].name);
      }
    }
  }

}
