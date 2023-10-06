import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './admin/layouts/full/full.component';
import { BlankComponent } from './admin/layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './admin/layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './admin/layouts/full/header/header.component';
import { BrandingComponent } from './admin/layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './admin/layouts/full/sidebar/nav-item/nav-item.component';

import { StudentFullComponent } from './student/layouts/full/student-full.component';
import { StudentHeaderComponent } from './student/layouts/full/header/student-header.component';
import { StudentBrandingComponent } from './student/layouts/full/sidebar/student-branding.component';
import { StudentSidebarComponent } from './student/layouts/full/sidebar/student-sidebar.component';
import { StudentAppNavItemComponent } from './student/layouts/full/sidebar/nav-item/student-nav-item.component';
import { StudentBlankComponent } from './student/layouts/blank/student-blank.component';
import { GradeEntryAgentAppNavItemComponent } from './grade-entry-agent/layouts/full/sidebar/nav-item/grade-entry-agent-nav-item.component';
import { GradeEntryAgentBrandingComponent } from './grade-entry-agent/layouts/full/sidebar/grade-entry-agent-branding.component';
import { GradeEntryAgentComponent } from './admin/pages/users/grade-entry-agent/grade-entry-agent.component';
import { GradeEntryAgentFullComponent } from './grade-entry-agent/layouts/full/grade-entry-agent-full.component';
import { GradeEntryAgentSidebarComponent } from './grade-entry-agent/layouts/full/sidebar/grade-entry-agent-sidebar.component';
import { GradeEntryAgentBlankComponent } from './grade-entry-agent/layouts/blank/grade-entry-agent-blank.component';
import { GradeEntryAgentHeaderComponent } from './grade-entry-agent/layouts/full/header/grade-entry-agent-header.component';


import { FileVerifierFullComponent } from './file-verifier/layouts/full/file-verifier-full.component';
import { FileVerifierBlankComponent } from './file-verifier/layouts/blank/file-verifier-blank.component';
import { FileVerifierBrandingComponent } from './file-verifier/layouts/full/sidebar/file-verifier-branding.component';
import { FileVerifierSidebarComponent } from './file-verifier/layouts/full/sidebar/file-verifier-sidebar.component';
import { FileVerifierAppNavItemComponent } from './file-verifier/layouts/full/sidebar/nav-item/file-verifier-nav-item.component';
import { FileVeriferHeaderComponent } from './file-verifier/layouts/full/header/file-verifier-header.component';


import { SystemManagerFullComponent } from './system-manager/layouts/full/system-manager-full.component';
import { SystemManagerHeaderComponent } from './system-manager/layouts/full/header/system-manager-header.component';
import { SystemManagerBrandingComponent } from './system-manager/layouts/full/sidebar/system-manager-branding.component';
import { SystemManagerSidebarComponent } from './system-manager/layouts/full/sidebar/system-manager-sidebar.component';
import { SystemManagerBlankComponent } from './system-manager/layouts/blank/system-manager-blank.component';
import { SystemManagerAppNavItemComponent } from './system-manager/layouts/full/sidebar/nav-item/system-manager-nav-item.component';

import { HomePageComponent } from './home-page/home-page.component';
import { AuthenticationServiceService } from './authentication-service.service';
import { AdminServiceService } from './admin-service.service';
import { ProfileComponent } from './admin/pages/profile/profile.component';
import { StudentServiceService } from './student-service.service';
import { CncServiceService } from './cnc-service.service';
import { FileVerifierServiceService } from './services/file-verifier-service.service';
import { GradeEntryAgentServiceService } from './services/grade-entry-agent-service.service';





@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,

    StudentFullComponent,
    StudentBlankComponent,
    StudentHeaderComponent,
    StudentBrandingComponent,
    StudentSidebarComponent,
    StudentAppNavItemComponent,


    GradeEntryAgentFullComponent,
    GradeEntryAgentBlankComponent,
    GradeEntryAgentHeaderComponent,
    GradeEntryAgentAppNavItemComponent,
    GradeEntryAgentBrandingComponent,
    GradeEntryAgentSidebarComponent,

    FileVerifierFullComponent,
    FileVerifierBlankComponent,
    FileVerifierBrandingComponent,
    FileVerifierSidebarComponent,
    FileVerifierAppNavItemComponent,
    FileVeriferHeaderComponent,


    SystemManagerFullComponent,
    SystemManagerBlankComponent,
    SystemManagerHeaderComponent,
    SystemManagerBrandingComponent,
    SystemManagerSidebarComponent,
    SystemManagerAppNavItemComponent,



    HomePageComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],

  providers: [AuthenticationServiceService,AdminServiceService,StudentServiceService,
  CncServiceService,FileVerifierServiceService,GradeEntryAgentServiceService], // Ensure UserService is listed here
})
export class AppModule {}
