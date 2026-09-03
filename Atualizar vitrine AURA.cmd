@echo off
setlocal
title Atualizar vitrine AURA
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nao foi encontrado. Instale o Node.js para atualizar a vitrine.
  pause
  exit /b 1
)
node --experimental-sqlite tools\joias-control-publicador\atualizar-vitrine.mjs
set "resultado=%errorlevel%"
echo.
pause
exit /b %resultado%
