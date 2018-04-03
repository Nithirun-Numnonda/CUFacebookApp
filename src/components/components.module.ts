import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header';

@NgModule({
	declarations: [SearchBarComponent,
    ExpandableHeaderComponent],
	imports: [],
	exports: [SearchBarComponent,
    ExpandableHeaderComponent]
})
export class ComponentsModule {}
