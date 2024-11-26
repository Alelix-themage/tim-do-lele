import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

import { AG_GRID_LOCALE_PT_BR } from './localeText';
import { AgGridModule } from 'ag-grid-angular';
import { _values, ColDef, ValueCache } from 'ag-grid-community';
import { isPlatformBrowser } from '@angular/common';
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css' 

import { GetPedidosService } from 'app/service/get-pedidos.service';

@Component({
  selector: 'app-admin-pedidos',
  standalone: true,
  imports: [CommonModule, AdminNavbarComponent, AgGridModule],
  templateUrl: './admin-pedidos.component.html',
  styleUrl: './admin-pedidos.component.scss'
})
export class AdminPedidosComponent {
  localeText = AG_GRID_LOCALE_PT_BR;

  constructor(private getPedidosService: GetPedidosService) { }

  columnDefs: ColDef[] = [
    { field: 'Equipamento', headerName: 'Equipamento', flex: 2, floatingFilter:true },
    { field: 'Motivo', headerName: 'Motivo', flex: 3, floatingFilter:true},
    { field: 'Descricao', headerName: 'Descrição', flex: 3, floatingFilter:true},
    { field: 'Observacao', headerName: 'Observação', flex: 3, 
      floatingFilter:true},
    { field: 'Situacao', headerName: 'Situação', flex: 2, floatingFilter:true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["AGUARDANDO", "EM ANALISE", "APROVADO", "RECUSADO"],
      },
      cellStyle: {
        "rag-green": "APROVADO",
        "rag-blue": "RECUSADO",
        "rag-red": "EM ANALISE'"
      },
    },
    { field: 'Status', headerName: 'Status', floatingFilter:true, flex: 2,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["ABERTO", "FINALIZADO"],
      },
     },
     {field: 'Data', headerName: 'Data', floatingFilter: true, flex:2}
  ];

  // Inicializa os dados da tabela após carregar as solicitações
  OnGridRead(): void {
    this.rowData = this.getPedidosService.map(solicitacao => ({
      ID: solicitacao.ID,
      Nome: solicitacao.ID_USER,
      Email: solicitacao.EMAIL,
      Departamento: solicitacao.DESC_DEPTO,
      Equipamento: solicitacao.EQUIPAMENTO,
      Filial: solicitacao.FILIAL,
      Motivo: solicitacao.MOTIVO,
      Descricao: solicitacao.DESCRICAO,
      Observacao: solicitacao.OBSERVACAO ,
      Situacao: solicitacao.SITUACAO,
      Status: this.getStatus(solicitacao.STATUS),
      //Formatar a Data para melhor visualização
      Data: new Date(solicitacao.DATA).toLocaleDateString("pt-BR",{timeZone: 'UTC'})
    }));
  }

}
