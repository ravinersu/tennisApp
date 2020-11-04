import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-scoring',
  templateUrl: './live-scoring.page.html',
  styleUrls: ['./live-scoring.page.scss'],
})
export class LiveScoringPage implements OnInit {
  doubleFault = false;
  playerOneServing = true;
  playerScoring = {
    playerOneSetOnePoints: 0,
    playerOneSetTwoPoints: 0,
    playerOneSetThreePoints: 0,
    playerOneGamePoints: 0,
    playerTwoSetOnePoints: 0,
    playerTwoSetTwoPoints: 0,
    playerTwoSetThreePoints: 0,
    playerTwoGamePoints: 0
  };
  setOneWinnerIsPlayerOne = false;
  setOneWinnerIsPlayerTwo = false;
  scoringForStatistics = {
    // Basic scoring for statistics
    playerOneFirstServePointsWon: 0,
    playerOneFirstServePointsLost: 0,
    playerOneSecondServePointsWon: 0,
    playerOneSecondServePointsLost: 0,
    playerOneAceCounterMatch: 0,
    playerOneFaultCounterForAnalysisMatch: 0,
    playerOneDoubleFaultCounterForAnalysisMatch: 0,
    playerOneNumberOfBreakPointsMatch: 0,
    playerOneBreakPointsWonCounterMatch: 0,
    //  --- Player 2 ---
    playerTwoFirstServePointsWon: 0,
    playerTwoFirstServePointsLost: 0,
    playerTwoSecondServePointsWon: 0,
    playerTwoSecondServePointsLost: 0,
    playerTwoAceCounterMatch: 0,
    playerTwoFaultCounterForAnalysisMatch: 0,
    playerTwoDoubleFaultCounterForAnalysisMatch: 0,
    playerTwoNumberOfBreakPointsMatch: 0,
    playerTwoBreakPointsWonCounterMatch: 0,
    // Advanced scoring for statistics
    playerOneReturnForehandWinnerCounterMatch: 0,
    playerOneReturnForehandForcedErrorCounterMatch: 0,
    playerOneReturnBackhandForcedErrorCounterMatch: 0,
    playerOneReturnForehandUnforcedErrorCounterMatch: 0,
    playerOneReturnBackhandUnforcedErrorCounterMatch: 0,
    playerOneForehandWinnerCounterMatch: 0,
    playerOneBackhandWinnerCounterMatch: 0,
    playerOneForehandForcedErrorCounterMatch: 0,
    playerOneBackhandForcedErrorCounterMatch: 0,
    playerOneForehandUnforcedErrorCounterMatch: 0,
    playerOneBackhandUnforcedErrorCounterMatch: 0,
    //  --- Player 2 ---
    playerTwoReturnForehandWinnerCounterMatch: 0,
    playerTwoReturnBackhandWinnerCounterMatch: 0,
    playerTwoReturnForehandForcedErrorCounterMatch: 0,
    playerTwoReturnBackhandForcedErrorCounterMatch: 0,
    playerTwoReturnForehandUnforcedErrorCounterMatch: 0,
    playerTwoReturnBackhandUnforcedErrorCounterMatch: 0,
    playerTwoForehandWinnerCounterMatch: 0,
    playerTwoBackhandWinnerCounterMatch: 0,
    playerTwoForehandForcedErrorCounterMatch: 0,
    playerTwoBackhandForcedErrorCounterMatch: 0,
    playerTwoForehandUnforcedErrorCounterMatch: 0,
    playerTwoBackhandUnforcedErrorCounterMatch: 0
  };
  setOneIsRunning = true;
  

  constructor() { }

  ngOnInit() {
  }

  changeFault() {
    this.doubleFault = !this.doubleFault;
  }

  updateScore(scoreType) {
    console.log('update score called!', scoreType, this.playerScoring);
    if((scoreType === 'playerOneWin' || scoreType === 'playerOneAce') && this.setOneIsRunning) {
       if(this.playerScoring.playerOneGamePoints === 0) {
        this.playerScoring.playerOneGamePoints = 15;
      } else if(this.playerScoring.playerOneGamePoints === 15) {
        this.playerScoring.playerOneGamePoints = 30;
      } else if(this.playerScoring.playerOneGamePoints === 30) {
        this.playerScoring.playerOneGamePoints = 40;

      } else if(this.playerScoring.playerOneGamePoints === 40 && this.playerScoring.playerOneSetOnePoints < 6) {
        this.playerScoring.playerOneSetOnePoints = this.playerScoring.playerOneSetOnePoints + 1;
        this.playerScoring.playerOneGamePoints = 0;
        this.playerOneServing = !this.playerOneServing;
        if( this.playerScoring.playerOneSetOnePoints == 6) {
          this.playerScoring.playerOneGamePoints = 0;
          this.setOneWinnerIsPlayerOne = true;
          this.playerOneServing = !this.playerOneServing;
          this.setOneIsRunning = false;
        } 
      } 
    } else if((scoreType === 'playerTwoWin' || scoreType === 'playerTwoAce') && this.setOneIsRunning) {
      if(this.playerScoring.playerTwoGamePoints === 0) {
        this.playerScoring.playerTwoGamePoints = 15;
      } else if(this.playerScoring.playerTwoGamePoints === 15) {
        this.playerScoring.playerTwoGamePoints = 30;
      } else if(this.playerScoring.playerTwoGamePoints === 30) {
        this.playerScoring.playerTwoGamePoints = 40;
      } else if(this.playerScoring.playerTwoGamePoints === 40 && this.playerScoring.playerTwoSetOnePoints < 6) {
        this.playerScoring.playerTwoSetOnePoints = this.playerScoring.playerTwoSetOnePoints + 1;
        this.playerScoring.playerTwoGamePoints = 0;
        this.playerOneServing = !this.playerOneServing;
      } else if(this.playerScoring.playerTwoSetOnePoints == 6) {
        this.playerScoring.playerTwoSetTwoPoints = this.playerScoring.playerTwoSetTwoPoints + 1;
        this.playerScoring.playerTwoGamePoints = 0;
        this.setOneWinnerIsPlayerTwo = true;
        this.setOneIsRunning = false;
        this.playerOneServing = !this.playerOneServing;
      }
    }



// For Statistics 
  if(scoreType === 'playerOneAce') {
    this.scoringForStatistics.playerOneFirstServePointsWon = this.scoringForStatistics.playerOneFirstServePointsWon + 1;
    this.scoringForStatistics.playerOneAceCounterMatch = this.scoringForStatistics.playerOneAceCounterMatch + 1;
  }

  }



}
