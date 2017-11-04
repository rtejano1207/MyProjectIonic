import { NgModule } from '@angular/core';
import { MyPipe } from './my/my';
@NgModule({
	declarations: [MyPipe,
    MyPipe],
	imports: [],
	exports: [MyPipe,
    MyPipe]
})
export class PipesModule {}
