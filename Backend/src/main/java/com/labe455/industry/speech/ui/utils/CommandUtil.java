package com.labe455.industry.speech.ui.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import com.labe455.industry.speech.ui.system.monitor.model.Process;

import com.labe455.industry.speech.ui.exceptions.CommandNotFoundException;

/**
 * Utilidad general para obtener usar comandos del sistema operativo linux
 * (procesos, memoria, cpu, disco, etc).
 * 
 * @author Edgar Bladimir Lopez Alonzo
 * @version 1.0.0 10/10/2019
 */
public class CommandUtil {

	public static List<Process> getProcessInfo() throws IOException {
		List<Process> processList = new ArrayList<Process>();

		ProcessBuilder builder = new ProcessBuilder("whoami");
		java.lang.Process javaProc = builder.start();
		String currentUser = "";
		try (BufferedReader stdin = new BufferedReader(new InputStreamReader(javaProc.getInputStream()))) {
			String line;
			while ((line = stdin.readLine()) != null) {
				currentUser = line;
			}
		}

		builder = new ProcessBuilder("top", "-b", "-n", "1");
		javaProc = builder.start();

		try (BufferedReader stdin = new BufferedReader(new InputStreamReader(javaProc.getInputStream()))) {

			String line;

			// Blank line indicates end of summary.
			while ((line = stdin.readLine()) != null) {
				if (line.isEmpty()) {
					break;
				}
			}

			// Skip header line.
			if (line != null) {
				line = stdin.readLine();
			}

			while ((line = stdin.readLine()) != null) {

				Process proc = new Process();
				List<String> elements = new ArrayList<String>();
				StringBuilder strBuilder = new StringBuilder();
				char aBefore = line.charAt(0);

				for (int i = 0; i < line.length(); i++) {

					char a = line.charAt(i);

					if ((a != 32)) {
						strBuilder.append(a);
					} else {
						if ((aBefore != 32)) {
							elements.add(strBuilder.toString());
							strBuilder = new StringBuilder();
						}
					}
					aBefore = line.charAt(i);
				}

				elements.add(strBuilder.toString());

				proc.setProcessID(elements.get(0));
				proc.setUser(elements.get(1));
				proc.setPriority(elements.get(2));
				proc.setNiceValue(elements.get(3));
				proc.setVirtualMemory(elements.get(4));
				proc.setRes(elements.get(5));
				proc.setSharedMemory(elements.get(6));
				proc.setS(elements.get(7));
				proc.setCpuUsage(Double.parseDouble(elements.get(8)));
				proc.setMemUsage(Double.parseDouble(elements.get(9)));
				proc.setHour(elements.get(10));
				proc.setCommand(elements.get(11));

				if (proc.getUser().equals(currentUser)) {
					processList.add(proc);
				}

			}

		}
		
		processList.sort(Comparator.comparing(Process::getCommand));

		return processList;
	}

	public static void getMemoryInfo() {

	}

	public static void getCPUInfo() {

	}

	public static void getDiskInfo() {

	}

	public static void killProcess(String processName) throws IOException, CommandNotFoundException {
		ProcessBuilder builder = new ProcessBuilder("killall", processName);
		java.lang.Process javaProc = builder.start();

		try (BufferedReader stdin = new BufferedReader(new InputStreamReader(javaProc.getErrorStream()))) {
			String line;
			while ((line = stdin.readLine()) != null) {
				throw new CommandNotFoundException("No se pudo terminar el proceso, compruebe que este siga en ejecución o contacte al administrador");
			}

		}
	}

}