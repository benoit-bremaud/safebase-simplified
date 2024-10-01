import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface Database {
  name: string;
  type: string;
  status: string;
  lastBackup: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  databases: Database[] = [
    { name: 'MySQL_DB1', type: 'MySQL', status: 'Online', lastBackup: '2024-09-20 12:30' },
    { name: 'Postgres_DB1', type: 'PostgreSQL', status: 'Online', lastBackup: '2024-09-21 08:45' },
    { name: 'MySQL_DB2', type: 'MySQL', status: 'Offline', lastBackup: '2024-09-19 16:00' },
    { name: 'Postgres_DB2', type: 'PostgreSQL', status: 'Online', lastBackup: '2024-09-21 09:00' },
    { name: 'MySQL_DB3', type: 'MySQL', status: 'Online', lastBackup: '2024-09-21 10:30' },
    { name: 'Postgres_DB3', type: 'PostgreSQL', status: 'Online', lastBackup: '2024-09-21 11:00' },
    { name: 'MySQL_DB4', type: 'MySQL', status: 'Online', lastBackup: '2024-09-21 12:30' },
    { name: 'Postgres_DB4', type: 'PostgreSQL', status: 'Offline', lastBackup: '2024-09-21 13:00' },
    { name: 'MySQL_DB5', type: 'MySQL', status: 'Online', lastBackup: '2024-09-21 14:30' },
    { name: 'Postgres_DB5', type: 'PostgreSQL', status: 'Online', lastBackup: '2024-09-21 15:00' },
    { name: 'MongoDB_DB1', type: 'MongoDB', status: 'Online', lastBackup: '2024-09-21 16:30' },
    { name: 'SQLite_DB1', type: 'SQLite', status: 'Offline', lastBackup: '2024-09-20 17:00' },
    { name: 'Oracle_DB1', type: 'Oracle', status: 'Online', lastBackup: '2024-09-21 18:30' },
    { name: 'SQLServer_DB1', type: 'SQL Server', status: 'Online', lastBackup: '2024-09-21 19:00' }
  ];
}
